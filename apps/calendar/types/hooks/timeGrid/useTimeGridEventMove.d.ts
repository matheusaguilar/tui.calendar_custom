import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { GridPositionFinder, TimeGridData } from "../../types/grid";
export declare function useTimeGridEventMove({ gridPositionFinder, timeGridData, }: {
    gridPositionFinder: GridPositionFinder;
    timeGridData: TimeGridData;
}): {
    movingEvent: EventUIModel | null;
    nextStartTime: TZDate | null;
};
