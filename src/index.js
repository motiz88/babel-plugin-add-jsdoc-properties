require("babel/polyfill");

import 'better-log/install';
import { addTag } from './TraversalUtils';
import typeAnnotationToJsdocType from './typeAnnotationToJsdocType';

module.exports = function({ Plugin, types: t }) {
    return new Plugin('jsdoc', {
        visitor: {
            'ClassDeclaration|ClassExpression'(node, parent, scope, file) {
                this::addTag('class');
            },

            'MethodDefinition'(node, parent, scope, file) {
                if (scope.block && scope.block.id && scope.block.id.name) {
                    if (node.kind === 'constructor') {
                        this::addTag('constructs', {
                            description: scope.block.id.name
                        });
                    } else {
                        this::addTag('memberof', {
                            description: scope.block.id.name
                        });
                    }
                }
                if (node.static) {
                    this::addTag('static');
                }
            },

            'FunctionDeclaration|FunctionExpression'(node, parent, scope, file) {
                let path = this;

                if (t.isMethodDefinition(parent)) {
                    path = this.parentPath;
                }

                if (!(scope.block && scope.block.id && scope.block.id.name && node.kind === 'constructor')) {
                    let name;
                    if (t.isMethodDefinition(parent) && parent.kind !== 'constructor') {
                        name = parent.key.name;
                    }
                    path::addTag({
                        title: 'function',
                        name: name
                    });
                }

                if (node.params) {
                    node.params.forEach(param => {
                        if (param.type === 'RestElement') {
                            path::addTag({
                                title: 'param',
                                name: param.argument.name,
                                type: '...*',
                            });
                        } else {
                            const jsdocType = typeAnnotationToJsdocType(
                                param.typeAnnotation && param.typeAnnotation.typeAnnotation
                            );
                            path::addTag({
                                title: 'param',
                                name: param.name,
                                type: jsdocType && (jsdocType + (param.optional ? '=' : ''))
                            });
                        }
                    });
                }

                if (node.returnType) {
                    path::addTag({
                        title: 'returns',
                        type: typeAnnotationToJsdocType(node.returnType.typeAnnotation)
                    });
                }
            }
        }
    });
};
