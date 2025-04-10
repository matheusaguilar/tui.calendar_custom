import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { GridPositionFinder } from "../../types/grid";
interface Params {
    weekDates: TZDate[];
    gridColWidthMap: string[][];
    gridPositionFinder: GridPositionFinder;
}
export declare function useAlldayGridRowEventResize({ weekDates, gridColWidthMap, gridPositionFinder, }: Params): {
    resizingEvent: EventUIModel | null;
    resizingWidth: string | null;
};
export {};
