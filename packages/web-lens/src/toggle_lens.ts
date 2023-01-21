export const toggle_lens = () => {
    (globalThis as any)['embodium']?.['web-lens']?.toggle_lens();
}
