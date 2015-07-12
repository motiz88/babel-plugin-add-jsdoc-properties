import doctrine from 'doctrine';

export function docCommentIndex(node) {
    if (!node.leadingComments)
        return -1;
    return Array.prototype.findIndex.call(node.leadingComments, comment => /^\*(?:$|[^*])/.test(comment.value));
}

export function hasDocComment(node) {
    return docCommentIndex(node) !== -1;
}


export function getDocComment(node) {
    const idx = docCommentIndex(node);
    return (idx === -1) ? undefined : node.leadingComments[idx].value;
}

export function getDoclet(node) {
    const comment = getDocComment(node);
    if (!comment)
        return null;
    return doctrine.parse(comment || '', {
        unwrap: true,
        loose: true,
    });
}
