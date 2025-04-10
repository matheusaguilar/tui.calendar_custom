import type { PropsWithChildren } from "../types/components/common";
interface Props {
    name: string;
    overflowY?: boolean;
    overflowX?: boolean;
    show?: boolean;
    autoSize?: number;
    initialHeight?: number;
    initialWidth?: number;
    minHeight?: number;
    minWidth?: number;
    maxHeight?: number;
    maxWidth?: number;
    expandable?: boolean;
    maxExpandableHeight?: number;
    maxExpandableWidth?: number;
    resizable?: boolean | string[];
    resizerHeight?: number;
    resizerWidth?: number;
}
export declare const Panel: import("preact").FunctionalComponent<Omit<PropsWithChildren<Props>, "ref"> & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export {};
