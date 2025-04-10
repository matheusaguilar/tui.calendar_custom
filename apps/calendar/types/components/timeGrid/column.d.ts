import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { GridPositionFinder, TimeGridData } from "../../types/grid";
interface Props {
    timeGridData: TimeGridData;
    columnDate: TZDate;
    columnWidth: string;
    columnIndex: number;
    totalUIModels: EventUIModel[][];
    gridPositionFinder: GridPositionFinder;
    isLastColumn: boolean;
    readOnly?: boolean;
}
export declare const Column: import("preact").FunctionComponent<Props>;
export {};
