export declare type ItemID = string | number;
export declare type Item = {
    _id?: ItemID;
    [k: string | number]: any;
};
export declare type Filter<ItemType> = (item: ItemType) => boolean;
/**
 * Generic collection base on ES6 Map.
 *
 * It needs function for get model's unique id.
 *
 * if the function is not supplied then it uses default function {@link Collection#getItemID}
 * @param {function} [getItemIDFn] function for get model's id.
 */
export default class Collection<ItemType extends Item> {
    private internalMap;
    constructor(getItemIDFn?: (item: ItemType) => ItemID);
    /**
     * Combine supplied function filters and condition.
     * @param {...Filter} filterFns - function filters
     * @returns {function} combined filter
     */
    static and<ItemType>(...filterFns: Array<Filter<ItemType>>): (item: ItemType) => boolean;
    /**
     * Combine multiple function filters with OR clause.
     * @param {...function} filterFns - function filters
     * @returns {function} combined filter
     */
    static or<ItemType>(...filterFns: Array<Filter<ItemType>>): (item: ItemType) => boolean;
    /**
     * get model's unique id.
     * @param {object} item model instance.
     * @returns {string | number} model unique id.
     */
    getItemID(item: ItemType): ItemID;
    getFirstItem(): ItemType | null;
    /**
     * add models.
     * @param {Object[]} items - models to add this collection.
     */
    add(...items: ItemType[]): Collection<ItemType>;
    /**
     * remove models.
     * @param {Array.<(Object|string|number)>} items model instances or unique ids to delete.
     */
    remove(...items: Array<ItemType | ItemID>): ItemType[] | ItemType;
    /**
     * check collection has specific model.
     * @param {(object|string|number)} id model instance or id to check
     * @returns {boolean} is has model?
     */
    has(item: ItemType | ItemID): boolean;
    get(item: ItemType | ItemID): ItemType | null;
    /**
     * invoke callback when model exist in collection.
     * @param {(string|number)} id model unique id.
     * @param {function} callback the callback.
     */
    doWhenHas(id: ItemID, callback: (item: ItemType) => void): void;
    /**
     * Search model. and return new collection.
     * @param {function} filterFn filter function.
     * @returns {Collection} new collection with filtered models.
     * @example
     * collection.filter(function(item) {
     *     return item.edited === true;
     * });
     *
     * function filter1(item) {
     *     return item.edited === false;
     * }
     *
     * function filter2(item) {
     *     return item.disabled === false;
     * }
     *
     * collection.filter(Collection.and(filter1, filter2));
     *
     * collection.filter(Collection.or(filter1, filter2));
     */
    filter(filterFn: Filter<ItemType>): Collection<ItemType>;
    /**
     * Group element by specific key values.
     *
     * if key parameter is function then invoke it and use returned value.
     * @param {(string|number|function)} groupByFn key property or getter function.
     * @returns {object.<string|number, Collection>} grouped object
     * @example
     * // pass `string`, `number`, `boolean` type value then group by property value.
     * collection.groupBy('gender');    // group by 'gender' property value.
     * collection.groupBy(50);          // group by '50' property value.
     *
     * // pass `function` then group by return value. each invocation `function` is called with `(item)`.
     * collection.groupBy(function(item) {
     *     if (item.score > 60) {
     *         return 'pass';
     *     }
     *     return 'fail';
     * });
     */
    groupBy(groupByFn: string | number | ((item: ItemType) => string | number)): Record<string, Collection<ItemType>>;
    /**
     * Return the first item in collection that satisfies the provided function.
     * @param {function} [findFn] - function filter
     * @returns {object|null} item.
     */
    find(findFn: Filter<ItemType>): ItemType | null;
    /**
     * sort a basis of supplied compare function.
     * @param {function} compareFn compareFunction
     * @returns {array} sorted array.
     */
    sort(compareFn: (a: ItemType, b: ItemType) => number): ItemType[];
    /**
     * iterate each model element.
     *
     * when iteratee return false then break the loop.
     * @param {function} iteratee iteratee(item, index, items)
     */
    each(iteratee: (item: ItemType, key: keyof ItemType) => boolean | void): void;
    /**
     * remove all models in collection.
     */
    clear(): void;
    /**
     * return new array with collection items.
     * @returns {array} new array.
     */
    toArray(): ItemType[];
    get size(): number;
}
