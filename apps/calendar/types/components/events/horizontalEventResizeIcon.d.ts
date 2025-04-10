import { h } from 'preact';
import type { MouseEventListener } from "../../types/util";
interface Props {
    onMouseDown?: MouseEventListener;
}
export declare function HorizontalEventResizeIcon({ onMouseDown }: Props): h.JSX.Element;
export {};
