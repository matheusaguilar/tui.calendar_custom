import type TZDate from "../time/date";
import type { WeekOptions } from "../types/options";
import type { TemplateWeekDayName } from "../types/template";
export declare const DEFAULT_DAY_NAMES: string[];
export declare const getDayName: (dayIndex: number) => string;
export declare function getDayNames(days: TZDate[], weekDayNamesOption: Required<WeekOptions>['dayNames'] | []): TemplateWeekDayName[];
