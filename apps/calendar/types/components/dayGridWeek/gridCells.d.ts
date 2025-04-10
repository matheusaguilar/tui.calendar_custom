import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
interface Props {
    uiModels: EventUIModel[];
    weekDates: TZDate[];
    narrowWeekend: boolean;
    height: number;
    clickedIndex: number;
    isClickedCount: boolean;
    onClickExceedCount: (index: number) => void;
    onClickCollapseButton: () => void;
}
export declare const GridCells: import("preact").FunctionComponent<Props>;
export {};
