import type EventModel from "../model/eventModel";
import EventUIModel from "../model/eventUIModel";
import TZDate from "../time/date";
import type { Filter } from "../utils/collection";
import Collection from "../utils/collection";
import type { CollisionGroup, Matrix3d } from "../types/events";
/**
 * Calculate collision group.
 * @param {Array<EventModel|EventUIModel>} events list of ui models.
 * @param {boolean} [usingTravelTime = true]
 * @returns {Array<number[]>} Collision Group.
 */
export declare function getCollisionGroup<Events extends EventModel | EventUIModel>(events: Events[], usingTravelTime?: boolean): CollisionGroup;
/**
 * Get row length by column index in 2d matrix.
 * @param {array[]} matrix Matrix
 * @param {number} col Column index.
 * @returns {number} Last row number in column or -1
 */
export declare function getLastRowInColumn(matrix: Array<any[]>, col: number): number;
/**
 * Calculate matrix for appointment block element placing.
 * @param {Collection} collection model collection.
 * @param {Array<number[]>} collisionGroups Collision groups for event set.
 * @param {boolean} [usingTravelTime = true]
 * @returns {array} matrices
 */
export declare function getMatrices<T extends EventModel | EventUIModel>(collection: Collection<T>, collisionGroups: CollisionGroup, usingTravelTime?: boolean): Matrix3d<T>;
/**
 * Filter that get event model in supplied date ranges.
 * @param {TZDate} start - start date
 * @param {TZDate} end - end date
 * @returns {function} event filter function
 */
export declare function getEventInDateRangeFilter(start: TZDate, end: TZDate): Filter<EventModel | EventUIModel>;
/**
 * Position each ui model for placing into container
 * @param {TZDate} start - start date to render
 * @param {TZDate} end - end date to render
 * @param {Matrix3d} matrices - matrices from controller
 * @param {function} [iteratee] - iteratee function invoke each ui models
 */
export declare function positionUIModels(start: TZDate, end: TZDate, matrices: Matrix3d<EventUIModel>, iteratee?: (uiModel: EventUIModel) => void): void;
/**
 * Limit start, end date each ui model for render properly
 * @param {TZDate} start - start date to render
 * @param {TZDate} end - end date to render
 * @param {Collection<EventUIModel>|EventUIModel} uiModelColl - collection of EventUIModel or EventUIModel
 * @returns {?EventUIModel} return ui model when third parameter is
 *  ui model
 */
export declare function limitRenderRange(start: TZDate, end: TZDate, uiModelColl: Collection<EventUIModel> | EventUIModel): EventUIModel | null;
/**
 * Convert event model collection to ui model collection.
 * @param {Collection} eventCollection - collection of event model
 * @returns {Collection} collection of event ui model
 */
export declare function convertToUIModel(eventCollection: Collection<EventModel>): Collection<EventUIModel>;
