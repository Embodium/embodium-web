import { PragmaDirective } from "./pragma";

export type Metadata = {
    readonly ['application-name']?: string;
    readonly charset?: string;
    readonly ['color-scheme']?: ColorScheme;
    readonly creator?: Array<string>;
    readonly custom?: Array<CustomMetadata>;
    readonly description?: string;
    readonly generator?: string;
    readonly googlebot?: Array<Robot>;
    readonly keywords?: Array<string>;
    readonly pragma?: PragmaDirective;
    readonly publisher?: string;
    readonly referrer?: Referrer;
    readonly robots?: Array<Robot>;
    readonly ['theme-color']?: ThemeColor;
    readonly title?: string;
    readonly viewport?: Viewport;
}

export type ThemeColor = string | { media: string, color: string };
export type Referrer = 'no-referrer'
    | 'origin'
    | 'no-referrer-when-downgrade'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-URL';

export type ColorScheme = 'normal' | 'only light' | ['dark', 'light'] | ['light', 'dark'];
export type Viewport = {
    readonly width?: number;
    readonly height?: number;
    readonly ['initial-scale']?: number;
    readonly ['maximum-scale']?: number;
    readonly ['minimum-scale']?: number;
    readonly ['user-scalable']?: 'yes' | 'no';
    readonly ['viewport-fit']?: 'auto' | 'contain' | 'cover';
}

export type Robot = 'index' | 'noindex'
    | 'follow' | 'nofollow'
    | 'all' | 'none'
    | 'noarchive' | 'nosnippet' | 'noimageindex' | 'nocache'; 

export type CustomMetadata = {
    readonly alias?: string;
    readonly name: string;
    readonly content?: string;
    readonly additional?: { [key: string]: string }
}
