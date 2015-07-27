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
                    if (node.kind !== 'constructor') {
                        this::addTag('memberof', {
                            name: scope.block.id.name
                        });
                        if (node.static) {
                            this::addTag('static');
                        } else {
                            this::addTag('instance');
                        }
                    }
                    if (node.key.name) {
                        if (node.kind === 'method') {
                            this::addTag('method', {
                                name: node.key.name
                            });
                        } else if (node.kind === 'get') {
                            this::addTag('property', {
                                name: node.key.name
                            });
                        }
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
                        } else if (param.type === 'AssignmentPattern' ) {
                            const jsdocType = typeAnnotationToJsdocType(
                                param.left.typeAnnotation && param.left.typeAnnotation.typeAnnotation
                            );
                            path::addTag({
                                title: 'param',
                                name: '[' + param.left.name + '=' + param.right.value + ']',
                                type: jsdocType
                            });
                        } else {
                            const jsdocType = typeAnnotationToJsdocType(
                                param.typeAnnotation && param.typeAnnotation.typeAnnotation
                            );
                            path::addTag({
                                title: 'param',
                                name: param.optional ? '[' + param.name + ']' : param.name,
                                type: jsdocType,
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
