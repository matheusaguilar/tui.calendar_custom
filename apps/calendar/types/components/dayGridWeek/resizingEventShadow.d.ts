import type { ComponentProps } from 'preact';
import { h } from 'preact';
import type { AlldayGridRow } from "./alldayGridRow";
import type { GridPositionFinder } from "../../types/grid";
declare type Props = Pick<ComponentProps<typeof AlldayGridRow>, 'weekDates' | 'gridColWidthMap'> & {
    gridPositionFinder: GridPositionFinder;
};
export declare function ResizingEventShadow({ weekDates, gridColWidthMap, gridPositionFinder }: Props): h.JSX.Element | null;
export {};
