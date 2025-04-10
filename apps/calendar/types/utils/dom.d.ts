export declare function getPosition(el: HTMLElement): {
    x: number;
    y: number;
};
export declare function getSize(el: HTMLElement): {
    width: number;
    height: number;
};
export declare function isOverlapped(el1: Element, el2: Element): boolean;
export declare function closest(element: HTMLElement, selector: string): HTMLElement | null;
export declare function stripTags(str: string): string;
