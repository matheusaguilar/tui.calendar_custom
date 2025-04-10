import { h } from 'preact';
import type TZDate from "../../time/date";
interface Props {
    rowIndex: number;
    weekDates: TZDate[];
    narrowWeekend: boolean;
}
export declare function AccumulatedGridSelection({ rowIndex, weekDates, narrowWeekend }: Props): h.JSX.Element;
export {};
