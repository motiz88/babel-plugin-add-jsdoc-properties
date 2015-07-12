import {getDoclet, docCommentIndex} from './NodeUtils';
import {normalize as normalizeTag} from './TagUtils';

export function appendDocFragment(fragment)
{
    const idx = docCommentIndex(this.node);
    if (idx === -1)
        this.addComment('leading', `* ${fragment} `);
    else
        this.node.leadingComments[idx].value += `${'\n'}* ${fragment} `;
}

export function addTag(tagKeyProps, tagOtherProps) {
    if (typeof tagKeyProps === 'string')
        tagKeyProps = {
            title: tagKeyProps
        };
    tagOtherProps = tagOtherProps || {};
    let tag = tagKeyProps;
    const normTag = normalizeTag(tag);

    const doclet = getDoclet(this.node);
    if (!doclet || !doclet.tags.map(normalizeTag).some(existingTag => Object.keys(tagKeyProps).every(prop => existingTag[prop] === tag[prop]))) {
        tag = Object.assign(tag, tagOtherProps);
        const elements = [`@${tag.title}`, tag.type && `{${tag.type}}`, tag.name, tag.name && tag.description && '-', tag.description]
                         .map(s => s || '')
                         .filter(s => String(s).length);
        this::appendDocFragment(elements.join(' '));
    }
}