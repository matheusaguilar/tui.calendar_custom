import type { GridPosition, GridPositionFinder } from "../../types/grid";
export declare function useCurrentPointerPositionInGrid(gridPositionFinder: GridPositionFinder): [GridPosition | null, () => void];
