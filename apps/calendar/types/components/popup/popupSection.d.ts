import { h } from 'preact';
import type { PropsWithChildren } from "../../types/components/common";
interface Props {
    classNames?: string[];
    onClick?: () => void;
}
export declare function PopupSection({ children, classNames, onClick, }: PropsWithChildren<Props>): h.JSX.Element;
export {};
