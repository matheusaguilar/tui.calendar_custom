import type { EventView, HorizontalCalendarView, TaskView, WeekOptions } from "../types/options";
export declare function getActivePanels(taskView: Required<WeekOptions>['taskView'], eventView: Required<WeekOptions>['eventView'], horizontalDayView: Required<WeekOptions>['horizontalDayView']): (TaskView | EventView | HorizontalCalendarView)[];
