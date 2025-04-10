import { h } from 'preact';
import type { AlldayEventCategory } from "../types/panel";
interface Props {
    name: AlldayEventCategory;
    width: number;
    height: number;
}
export declare function PanelResizer({ name, height }: Props): h.JSX.Element;
export {};
