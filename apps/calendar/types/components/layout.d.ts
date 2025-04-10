import type { ComponentChildren } from 'preact';
import { h } from 'preact';
import type { PropsWithChildren } from "../types/components/common";
interface Props {
    height?: number;
    width?: number;
    className?: string;
    autoAdjustPanels?: boolean;
    children: ComponentChildren;
}
export declare function Layout({ children, width, height, className, autoAdjustPanels, }: PropsWithChildren<Props>): h.JSX.Element;
export {};
