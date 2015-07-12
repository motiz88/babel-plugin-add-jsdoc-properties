export function normalizeTitle(tagTitle) {
    switch (tagTitle) {
        case 'arg':
            /* falls through */
        case 'argument':
        /* falls through */
        case 'param':
            return 'param';

     	case 'constructor':
            /* falls through */
        case 'class':
            return 'class';

        case 'method':
            /* falls through */
        case 'func':
        /* falls through */
        case 'function':
            return 'function';
    }
    return tagTitle;
}


export function normalize(tag) {
    const normTag = {
        title: normalizeTitle(tag.title)
    };
    if (normTag.title !== tag.title)
        return Object.assign({}, tag, normTag);
    return tag;
}