import {getDoclet, docCommentIndex} from './NodeUtils';
import {normalize as normalizeTag} from './TagUtils';

export function appendDocFragment(path, fragment) {
    const idx = docCommentIndex(path.node);
    if (idx === -1) {
        path.addComment('leading', `* ${fragment} `);
    } else {
        path.node.leadingComments[idx].value += `${'\n'}* ${fragment} `;
    }
}

export function addTag(path, tagKeyProps, tagOtherProps) {
    if (typeof tagKeyProps === 'string') {
        tagKeyProps = {
            title: tagKeyProps
        };
    }

    tagOtherProps = tagOtherProps || {};
    let tag = tagKeyProps;
    const normTag = normalizeTag(tag);

    const doclet = getDoclet(path.node);

    const notexists = !doclet || !doclet.tags.map(normalizeTag)
        .some(existingTag => {
            return Object.keys(tagKeyProps).every(prop => existingTag[prop] === tag[prop]);
        });

    if (notexists) {
        tag = Object.assign(tag, tagOtherProps);
        const elements = [
            `@${tag.title}`,
            tag.type && `{${tag.type}}`,
            tag.name,
            tag.name && tag.description && '-',
            tag.description
        ].filter(Boolean);
        appendDocFragment(path, elements.join(' '));
    }
}
