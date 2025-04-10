export interface Element {
    msMatchesSelector: (selectors: string) => boolean;
}
export declare type MouseEventListener = (e: MouseEvent) => void;
export declare type KeyboardEventListener = (e: KeyboardEvent) => void;
