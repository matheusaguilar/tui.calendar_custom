import type { useGridSelection } from "../hooks/gridSelection/useGridSelection";
import type { GridSelectionData, GridSelectionDataByRow, TimeGridSelectionDataByCol } from "../types/components/gridSelection";
declare type RequiredGridSelectionHookParams = Pick<Parameters<typeof useGridSelection>[0], 'selectionSorter' | 'dateGetter'>;
declare type GridSelectionHelper<SelectionCalculator extends (gridSelection: GridSelectionData | null, ...rest: any[]) => (TimeGridSelectionDataByCol | null) | (GridSelectionDataByRow | null)> = {
    sortSelection: RequiredGridSelectionHookParams['selectionSorter'];
    getDateFromCollection: RequiredGridSelectionHookParams['dateGetter'];
    calculateSelection: SelectionCalculator;
};
declare function calculateTimeGridSelectionByCurrentIndex(timeGridSelection: GridSelectionData | null, columnIndex: number, maxRowIndex: number): TimeGridSelectionDataByCol | null;
export declare const timeGridSelectionHelper: GridSelectionHelper<typeof calculateTimeGridSelectionByCurrentIndex>;
declare function calculateDayGridMonthSelectionByCurrentIndex(gridSelection: GridSelectionData | null, currentIndex: number, weekLength: number): {
    startCellIndex: number;
    endCellIndex: number;
} | null;
export declare const dayGridMonthSelectionHelper: GridSelectionHelper<typeof calculateDayGridMonthSelectionByCurrentIndex>;
declare function calculateAlldayGridRowSelectionByCurrentIndex(gridSelection: GridSelectionData | null): {
    startCellIndex: number;
    endCellIndex: number;
} | null;
export declare const alldayGridRowSelectionHelper: GridSelectionHelper<typeof calculateAlldayGridRowSelectionByCurrentIndex>;
export {};
