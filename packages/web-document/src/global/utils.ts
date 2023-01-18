export const prepare_data_attributes = (attribute_records?: Record<string, string>) => {
    return Object.fromEntries(Object.keys(attribute_records ?? {}).map(k => [`data-${k}`, attribute_records?.[k]]))
}
