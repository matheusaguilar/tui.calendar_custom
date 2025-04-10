import type { ComponentProps } from 'preact';
import { h } from 'preact';
import type { AlldayGridRow } from "./alldayGridRow";
import type { GridPositionFinder } from "../../types/grid";
declare type Props = Pick<ComponentProps<typeof AlldayGridRow>, 'rowStyleInfo'> & {
    gridPositionFinder: GridPositionFinder;
};
export declare function MovingEventShadow({ rowStyleInfo, gridPositionFinder, }: Pick<Props, 'rowStyleInfo'> & {
    gridPositionFinder: GridPositionFinder;
}): h.JSX.Element | null;
export {};
