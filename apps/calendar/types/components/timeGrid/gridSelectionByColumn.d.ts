import { h } from 'preact';
import type { TimeGridRow } from "../../types/grid";
interface Props {
    columnIndex: number;
    timeGridRows: TimeGridRow[];
}
export declare function GridSelectionByColumn({ columnIndex, timeGridRows }: Props): h.JSX.Element | null;
export {};
