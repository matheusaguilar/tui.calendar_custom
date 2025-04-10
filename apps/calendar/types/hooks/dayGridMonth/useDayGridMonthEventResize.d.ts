import type { getRenderedEventUIModels } from "../../helpers/grid";
import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { GridPositionFinder } from "../../types/grid";
interface EventResizeHookParams {
    dateMatrix: TZDate[][];
    renderedUIModels: ReturnType<typeof getRenderedEventUIModels>[];
    cellWidthMap: string[][];
    gridPositionFinder: GridPositionFinder;
    rowIndex: number;
}
export declare function useDayGridMonthEventResize({ dateMatrix, gridPositionFinder, renderedUIModels, cellWidthMap, rowIndex, }: EventResizeHookParams): [EventUIModel, string] | null;
export {};
