import type { GridPositionFinder } from "../../types/grid";
import type { CellStyle } from "../../types/time/datetime";
interface Params {
    rowStyleInfo: CellStyle[];
    gridPositionFinder: GridPositionFinder;
}
export declare function useAlldayGridRowEventMove({ rowStyleInfo, gridPositionFinder }: Params): {
    movingEvent: import("../../model/eventUIModel").default | null;
    movingLeft: number | null;
};
export {};
