import type EventUIModel from "../model/eventUIModel";
import type { CalendarColor } from "../types/options";
export declare const CSS_PREFIX = "toastui-calendar-";
interface ClassNameDictionary {
    [id: string]: boolean | undefined | null;
}
declare type ClassNameValue = string | ClassNameDictionary | undefined | null;
export declare function cls(...args: ClassNameValue[]): string;
export declare function toPercent(value: number): string;
export declare function toPx(value: number): string;
/**
 * ex)
 * extractPercentPx('calc(100% - 22px)') // { percent: 100, px: -22 }
 * extractPercentPx('100%') // { percent: 100, px: 0 }
 * extractPercentPx('-22px') // { percent: 0, px: -22 }
 */
export declare function extractPercentPx(value: string): {
    percent: number;
    px: number;
};
export declare function getEventColors(uiModel: EventUIModel, calendarColor: CalendarColor): CalendarColor;
export {};
