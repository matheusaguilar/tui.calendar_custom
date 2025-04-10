import TZDate from "../../time/date";
import type { TimeGridRow } from "../../types/grid";
interface Props {
    timeGridRows: TimeGridRow[];
    nowIndicatorState: {
        top: number;
        now: TZDate;
    } | null;
}
export declare const TimeColumn: import("preact").FunctionComponent<Props>;
export {};
