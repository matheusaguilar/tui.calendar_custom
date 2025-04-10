import type { GridSelectionType } from "../../slices/gridSelection";
import type TZDate from "../../time/date";
import type { GridSelectionData } from "../../types/components/gridSelection";
import type { GridPosition, GridPositionFinder } from "../../types/grid";
export declare function useGridSelection<DateCollection>({ type, selectionSorter, dateGetter, dateCollection, gridPositionFinder, }: {
    type: GridSelectionType;
    selectionSorter: (initPos: GridPosition, currentPos: GridPosition) => GridSelectionData;
    dateGetter: (dateCollection: DateCollection, gridSelection: GridSelectionData) => [TZDate, TZDate];
    dateCollection: DateCollection;
    gridPositionFinder: GridPositionFinder;
}): import("../../types/util").MouseEventListener;
