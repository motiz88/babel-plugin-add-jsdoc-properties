export default function typeAnnotationToJsdocType(annotation) {
    if (!annotation) {
        return undefined;
    }
    switch (annotation.type) {
        case 'Identifier':
            return annotation.id.name;
        case 'StringTypeAnnotation':
            return 'string';
        case 'NumberTypeAnnotation':
            return 'number';
        case 'BooleanTypeAnnotation':
            return 'boolean';
        case 'VoidTypeAnnotation':
            return undefined;
        case 'GenericTypeAnnotation':
            if (annotation.id.name === 'Class') {
                return 'Function';
            }
            if (annotation.typeParameters) {
                var childTypes = annotation.typeParameters.params.map(typeAnnotationToJsdocType).join(', ');
                return annotation.id.name + '.<' + childTypes + '>';
            }
            return annotation.id.name;
        case 'ObjectTypeAnnotation':
            return annotation.properties;
        case 'TypeParameterInstantiation':
        case 'FunctionTypeAnnotation':
            return 'Function';
        // TODO: Union and Intersection.
        // TODO: Any other types?
        default:
            return '*';
    }
}
