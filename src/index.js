require("babel/polyfill");

import 'better-log/install';
import {
    addTag
}
from './TraversalUtils';

module.exports = function({
    Plugin, types: t
}) {
    return new Plugin('jsdoc', {
        visitor: {
            'ClassDeclaration|ClassExpression' (node, parent, scope, file) {
                this::addTag('class');
            },
            'MethodDefinition' (node, parent, scope, file) {
                if (scope.block && scope.block.id && scope.block.id.name) {
                    if (node.kind === 'constructor')
                        this::addTag('constructs', {
                            description: scope.block.id.name
                        });
                    else
                        this::addTag('memberof', {
                            description: scope.block.id.name
                        });
                }
                if (node.static)
                    this::addTag('static');
            },
            'FunctionDeclaration|FunctionExpression' (node, parent, scope, file) {
                let path = this;
                if (t.isMethodDefinition(parent))
                    path = this.parentPath;
                path::addTag('function');
                if (node.params)
                    node.params.forEach(param => {
                        if (param.type === 'RestElement')
                            path::addTag({
                                title: 'param',
                                name: param.argument.name,
                                type: '...*',
                            });
                        else
                            path::addTag({
                                title: 'param',
                                name: param.name
                            });
                    });
            }
        }
    });
};