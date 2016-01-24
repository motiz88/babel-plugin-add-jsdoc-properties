import 'better-log/install';
import { addTag } from './TraversalUtils';
import typeAnnotationToJsdocType from './typeAnnotationToJsdocType';

module.exports = function({ types: t }) {
    return {
        visitor: {
            'ClassDeclaration|ClassExpression'(path, state) {
                this::addTag(path, {
                    title: 'class',
                    name: path.node.id.name
                });
            },

            'FunctionDeclaration|FunctionExpression|ClassMethod'(path, state) {
                const node = path.node;
                const parent = path.parent;

                if (!t.isClassMethod(node)) {
                    path::addTag(path, 'function', {
                        name: node.key && node.key.name
                    });
                } else {
                    const classDeclarationId = path.parentPath.parent.id;
                    if (classDeclarationId.name) {
                        if (node.kind !== 'constructor') {
                            this::addTag(path, 'memberof', {
                                name: classDeclarationId.name
                            });
                            if (node.static) {
                                this::addTag(path, 'static');
                            } else {
                                this::addTag(path, 'instance');
                            }

                            if (node.key.name) {
                                if (node.kind === 'method') {
                                    this::addTag(path, 'method', {
                                        name: node.key.name
                                    });
                                }
                            }
                        } else {
                            // add tags in ClassDeclaration
                            path = path.parentPath.parentPath;
                        }
                    }
                }

                if (node.params) {
                    node.params.forEach(param => {
                        if (param.type === 'RestElement') {
                            path::addTag(path, {
                                title: 'param',
                                name: param.argument.name,
                                type: '...*',
                            });
                        } else if (param.type === 'AssignmentPattern' ) {
                            const jsdocType = typeAnnotationToJsdocType(
                                param.left.typeAnnotation && param.left.typeAnnotation.typeAnnotation
                            );
                            path::addTag(path, {
                                title: 'param',
                                name: '[' + param.left.name + '=' + param.right.value + ']',
                                type: jsdocType
                            });
                        } else {
                            const jsdocType = typeAnnotationToJsdocType(
                                param.typeAnnotation && param.typeAnnotation.typeAnnotation
                            );
                            path::addTag(path, {
                                title: 'param',
                                name: param.optional ? '[' + param.name + ']' : param.name,
                                type: jsdocType,
                            });
                        }
                    });
                }

                if (node.kind === 'get') {
                    path::addTag(path, 'member', {
                        name: node.key.name,
                        type: node.returnType && typeAnnotationToJsdocType(node.returnType.typeAnnotation),
                    });
                } else if (node.returnType) {
                    path::addTag(path, {
                        title: 'returns',
                        type: typeAnnotationToJsdocType(node.returnType.typeAnnotation)
                    });
                }
            }
        }
    };
};
