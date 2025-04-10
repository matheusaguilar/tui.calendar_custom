import type { TuiDateConstructor } from '@toast-ui/date';
import TZDate from "./date";
export declare function setDateConstructor(constructor: TuiDateConstructor): void;
export declare function date(...args: any[]): import("@toast-ui/date").DateInterface;
export declare function getLocalTimezoneOffset(): number;
/**
 * Calculate timezone offset from UTC.
 *
 * Target date is needed for the case when the timezone is applicable to DST.
 */
export declare function calculateTimezoneOffset(timezoneName: string, targetDate?: TZDate): number;
export declare function isUsingDST(targetDate: TZDate, timezoneName?: string): boolean;
