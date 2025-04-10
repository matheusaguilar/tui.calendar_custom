import { h } from 'preact';
import type TZDate from "../../time/date";
import type { CellInfo } from "../../types/time/datetime";
interface Props {
    dateMatrix: TZDate[][];
    rowInfo: CellInfo[];
    cellWidthMap: string[][];
}
export declare function DayGridMonth({ dateMatrix, rowInfo, cellWidthMap }: Props): h.JSX.Element;
export {};
