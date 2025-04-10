/**
 * Define custom errors for calendar
 * These errors are exposed to the user.
 *
 * We can throw the default `Error` instance for internal errors.
 */
export declare class InvalidTimezoneNameError extends Error {
    constructor(timezoneName: string);
}
export declare class InvalidDateTimeFormatError extends Error {
    constructor(dateTimeString: string);
}
export declare class InvalidViewTypeError extends Error {
    constructor(viewType: string);
}
