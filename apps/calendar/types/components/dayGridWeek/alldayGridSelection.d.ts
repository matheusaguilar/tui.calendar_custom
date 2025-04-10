import type { ComponentProps } from 'preact';
import { h } from 'preact';
import type { AlldayGridRow } from "./alldayGridRow";
declare type Props = Pick<ComponentProps<typeof AlldayGridRow>, 'weekDates'> & {
    narrowWeekend: boolean;
};
export declare function AlldayGridSelection({ weekDates, narrowWeekend }: Props): h.JSX.Element | null;
export {};
