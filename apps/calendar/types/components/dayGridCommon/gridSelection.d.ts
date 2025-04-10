import { h } from 'preact';
import type TZDate from "../../time/date";
import type { GridSelectionDataByRow } from "../../types/components/gridSelection";
interface Props {
    type: 'allday' | 'month' | 'accumulated';
    gridSelectionData: GridSelectionDataByRow;
    weekDates: TZDate[];
    narrowWeekend: boolean;
}
export declare function GridSelection({ type, gridSelectionData, weekDates, narrowWeekend }: Props): h.JSX.Element | null;
export {};
