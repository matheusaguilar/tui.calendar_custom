import type { DeepPartial } from 'ts-essentials';
export declare function pick<T extends object, K extends keyof T>(obj: T, ...propNames: K[]): Pick<T, K>;
/**
 * Clone an instance of a ES6 class.
 *
 * The cloned instance will have the (most of) same properties as the original.
 *
 * Reference: https://stackoverflow.com/a/44782052
 */
export declare function clone<T extends object>(source: T): T;
/**
 * Merge two objects together. And It has some pitfalls.
 *
 * For performance reason this function only mutates the target object.
 *
 * Also, it only merges values of nested objects. Array or TZDate instance will be totally replaced.
 *
 * Other non-basic objects are not supported.
 *
 * Since it mutates the target object, avoid using it outside immer `produce` function.
 */
export declare function mergeObject<Target, Source extends DeepPartial<Target>>(target: Target, source?: Source): Target;
