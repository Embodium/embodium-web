export const is_supported = () => {
    if (globalThis.indexedDB) {
	return true;
    }
    return false;
}
