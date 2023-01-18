export type PragmaDirective = {
    readonly ['content-language']?: string;
    readonly ['content-type']?: string;
    readonly ['default-style']?: string;
    readonly refresh?: Refresh;
    // readonly ['set-cookie']?: string;
    readonly ['x-ua-compatible']?: string;
    readonly ['content-security-policy']?: string;
}

export type Refresh = number | {
    readonly interval: number;
    readonly url: string;
}
