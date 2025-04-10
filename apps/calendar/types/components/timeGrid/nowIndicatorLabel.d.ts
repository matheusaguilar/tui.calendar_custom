import { h } from 'preact';
import type TZDate from "../../time/date";
import type { TimeUnit } from "../../types/events";
interface Props {
    unit: TimeUnit;
    top: number;
    now: TZDate;
    zonedNow: TZDate;
}
export declare function NowIndicatorLabel({ unit, top, now, zonedNow }: Props): h.JSX.Element;
export {};
