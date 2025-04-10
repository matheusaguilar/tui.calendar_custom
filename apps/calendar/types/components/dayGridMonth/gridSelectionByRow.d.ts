import { h } from 'preact';
import type TZDate from "../../time/date";
interface Props {
    weekDates: TZDate[];
    narrowWeekend: boolean;
    rowIndex: number;
}
export declare function GridSelectionByRow({ weekDates, narrowWeekend, rowIndex }: Props): h.JSX.Element | null;
export {};
