import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { WeekOptions } from "../../types/options";
import type { CellStyle } from "../../types/time/datetime";
interface Props {
    events: EventUIModel[];
    weekDates: TZDate[];
    timesWidth?: number;
    timezonesCount?: number;
    height?: number;
    options?: WeekOptions;
    shouldRenderDefaultPopup?: boolean;
    rowStyleInfo: CellStyle[];
    gridColWidthMap: string[][];
}
export declare function AlldayGridRow({ events, weekDates, height, options, rowStyleInfo, gridColWidthMap, }: Props): h.JSX.Element;
export {};
