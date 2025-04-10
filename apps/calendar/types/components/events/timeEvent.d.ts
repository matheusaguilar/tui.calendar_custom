import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
interface Props {
    uiModel: EventUIModel;
    isResizingGuide?: boolean;
    nextStartTime?: TZDate | null;
    minHeight?: number;
}
export declare function TimeEvent({ uiModel, nextStartTime, isResizingGuide, minHeight, }: Props): h.JSX.Element;
export {};
