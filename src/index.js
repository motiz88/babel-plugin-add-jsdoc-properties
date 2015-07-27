require("babel/polyfill");

import 'better-log/install';
import { addTag } from './TraversalUtils';
import typeAnnotationToJsdocType from './typeAnnotationToJsdocType';

module.exports = function({ Plugin, types: t }) {
    return new Plugin('jsdoc', {
        visitor: {
            'ClassDeclaration|ClassExpression'(node, parent, scope, file) {
                this::addTag({
                    title: 'class',
                    name: node.id.name
                });
            },

            'MethodDefinition'(node, parent, scope, file) {
                if (scope.block && scope.block.id && scope.block.id.name) {
                    if (node.kind === 'method') {
                        this::addTag('method', {
                            name: scope.block.id.name + ( node.static ? '.': '#') + node.key.name
                        });
                    } else if (node.kind === 'get') {
                        this::addTag('property', {
                            name: scope.block.id.name + ( node.static ? '.': '#') + node.key.name
                        });
                    }
                }
            },

            'FunctionDeclaration|FunctionExpression'(node, parent, scope, file) {
                let path = this;

                if (t.isMethodDefinition(parent)) {
                    path = this.parentPath;
                    if (parent.kind === 'constructor') {
                        path = path.parentPath.parentPath;
                    }
                }

                if (!t.isMethodDefinition(parent)) {
                    path::addTag('function', {
                        name: node.key && node.key.name
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
