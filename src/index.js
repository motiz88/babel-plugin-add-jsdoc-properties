import 'better-log/install';

module.exports = function({
    Plugin, types: t
}) {
    return new Plugin('hello-world', {
        visitor: {
            ClassProperty(node, parent, scope, file) {
                this.dangerouslyRemove();
            }
        }
    });
};