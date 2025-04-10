import type { DndSlice } from "../../slices/dnd";
import type { DraggingTypes } from "../../types/drag";
import type { MouseEventListener } from "../../types/util";
declare type MouseListener = (e: MouseEvent, dndSlice: DndSlice['dnd']) => void;
declare type KeyboardListener = (e: KeyboardEvent, dndSlice: DndSlice['dnd']) => void;
export interface DragListeners {
    onInit?: MouseListener;
    onDragStart?: MouseListener;
    onDrag?: MouseListener;
    onMouseUp?: MouseListener;
    onPressESCKey?: KeyboardListener;
}
export declare function useDrag(draggingItemType: DraggingTypes, { onInit, onDragStart, onDrag, onMouseUp, onPressESCKey }?: DragListeners): MouseEventListener;
export {};
