import { h } from 'preact';
import type { DayNameThemes } from "./gridHeader";
import type { CalendarViewType, StyleProp } from "../../types/components/common";
import type { TemplateMonthDayName, TemplateWeekDayName } from "../../types/template";
interface Props {
    type: CalendarViewType;
    dayName: TemplateWeekDayName | TemplateMonthDayName;
    style: StyleProp;
    theme: DayNameThemes;
}
export declare function DayName({ dayName, style, type, theme }: Props): h.JSX.Element;
export {};
