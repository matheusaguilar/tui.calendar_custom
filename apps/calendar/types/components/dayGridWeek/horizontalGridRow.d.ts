import { h } from 'preact';
import type { TimeGridData } from "../../types/grid";
import type { CalendarInfo } from "../../types/options";
interface HorizontalGridRowProps {
    calendars: CalendarInfo[];
    timeGridData: TimeGridData;
}
export declare function HorizontalGridRow({ calendars, timeGridData }: HorizontalGridRowProps): h.JSX.Element;
export {};
