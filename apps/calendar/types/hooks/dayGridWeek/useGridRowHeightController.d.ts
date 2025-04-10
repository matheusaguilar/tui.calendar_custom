import type { AlldayEventCategory } from "../../types/panel";
export declare function useGridRowHeightController(maxTop: number, category: AlldayEventCategory): {
    clickedIndex: number;
    isClickedCount: boolean;
    onClickExceedCount: (index: number) => void;
    onClickCollapseButton: () => void;
};
