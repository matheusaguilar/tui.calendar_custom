import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
import type { GridPositionFinder, TimeGridData } from "../../types/grid";
export declare function ResizingGuideByColumn({ gridPositionFinder, totalUIModels, columnIndex, timeGridData, }: {
    gridPositionFinder: GridPositionFinder;
    totalUIModels: EventUIModel[][];
    columnIndex: number;
    timeGridData: TimeGridData;
}): h.JSX.Element | null;
