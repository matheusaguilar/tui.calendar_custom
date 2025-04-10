import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
interface Props {
    uiModel: EventUIModel;
    eventHeight: number;
    headerHeight: number;
    resizingWidth?: string | null;
    flat?: boolean;
    movingLeft?: number | null;
}
export declare function HorizontalEvent({ flat, uiModel, eventHeight, headerHeight, resizingWidth, movingLeft, }: Props): h.JSX.Element;
export {};
