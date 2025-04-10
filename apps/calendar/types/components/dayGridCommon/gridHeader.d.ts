import { h } from 'preact';
import type { CalendarViewType } from "../../types/components/common";
import type { CalendarMonthOptions, CalendarWeekOptions } from "../../types/store";
import type { TemplateMonthDayName, TemplateWeekDayName } from "../../types/template";
import type { CommonTheme, MonthTheme, WeekTheme } from "../../types/theme";
import type { CellStyle } from "../../types/time/datetime";
declare type TemplateDayNames = (TemplateWeekDayName | TemplateMonthDayName)[];
export declare type DayNameThemes = {
    common: {
        saturday: CommonTheme['saturday'];
        holiday: CommonTheme['holiday'];
        today: CommonTheme['today'];
        dayName: CommonTheme['dayName'];
    };
    week?: {
        pastDay: WeekTheme['pastDay'];
        today: WeekTheme['today'];
        dayName: WeekTheme['dayName'];
    };
    month?: {
        dayName: MonthTheme['dayName'];
    };
};
interface Props {
    type: CalendarViewType;
    dayNames: TemplateDayNames;
    options?: CalendarMonthOptions | CalendarWeekOptions;
    marginLeft?: string;
    rowStyleInfo: CellStyle[];
}
export declare function GridHeader({ dayNames, marginLeft, rowStyleInfo, type, }: Props): h.JSX.Element;
export {};
