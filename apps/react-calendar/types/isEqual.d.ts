/**
 * Compare two objects deeply
 *
 * It doesn't care about some types like RegExp, Map, Set etc.
 * Because they are not proper types for props of the Calendar component.
 *
 * Comparing two functions with `toString` is not completely reliable
 * because their closure variables might not the same.
 *
 * @param {any} a the first object
 * @param {any} b the second object to compare
 * @returns {boolean}
 */
export declare function isEqual(a: any, b: any): boolean;
