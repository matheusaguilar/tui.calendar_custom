import type EventUIModel from "../model/eventUIModel";
import type { DraggingTypes } from "../types/drag";
import type { CalendarStore, SetState } from "../types/store";
export declare enum DraggingState {
    IDLE = 0,
    INIT = 1,
    DRAGGING = 2,
    CANCELED = 3
}
export interface DndSlice {
    dnd: {
        draggingItemType: DraggingTypes | null;
        draggingState: DraggingState;
        initX: number | null;
        initY: number | null;
        x: number | null;
        y: number | null;
        draggingEventUIModel: EventUIModel | null;
    };
}
export interface DndDispatchers {
    initDrag: (initState: Pick<DndSlice['dnd'], 'initX' | 'initY' | 'draggingItemType'>) => void;
    setDragging: (newState: Partial<Omit<DndSlice['dnd'], 'draggingState'>>) => void;
    cancelDrag: () => void;
    reset: () => void;
    setDraggingEventUIModel: (eventUIModel: EventUIModel | null) => void;
}
export declare function createDndSlice(): DndSlice;
export declare function createDndDispatchers(set: SetState<CalendarStore>): DndDispatchers;
