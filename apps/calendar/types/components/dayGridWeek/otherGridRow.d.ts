import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { WeekOptions } from "../../types/options";
import type { AlldayEventCategory } from "../../types/panel";
interface Props {
    category: Exclude<AlldayEventCategory, 'allday'>;
    events: EventUIModel[];
    weekDates: TZDate[];
    timesWidth?: number;
    timezonesCount?: number;
    height?: number;
    options?: WeekOptions;
    gridColWidthMap: string[][];
}
export declare function OtherGridRow({ events, weekDates, category, height, options, }: Props): h.JSX.Element;
export {};
