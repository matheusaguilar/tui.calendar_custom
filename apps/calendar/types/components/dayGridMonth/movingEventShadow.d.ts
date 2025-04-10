import type { ComponentProps } from 'preact';
import { h } from 'preact';
import type { DayGridMonth } from "./dayGridMonth";
import type { GridPositionFinder } from "../../types/grid";
declare type Props = Pick<ComponentProps<typeof DayGridMonth>, 'dateMatrix' | 'rowInfo'> & {
    rowIndex: number;
    gridPositionFinder: GridPositionFinder;
};
export declare function MovingEventShadow({ dateMatrix, gridPositionFinder, rowInfo, rowIndex }: Props): h.JSX.Element | null;
export {};
