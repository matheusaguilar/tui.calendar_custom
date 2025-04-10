import type { CalendarStore, SetState } from "../types/store";
import type { Template, TemplateConfig } from "../types/template";
export declare type TemplateSlice = {
    template: Template;
};
export declare type TemplateDispatchers = {
    setTemplate: (template: TemplateConfig) => void;
};
export declare function createTemplateSlice(templateConfig?: TemplateConfig): TemplateSlice;
export declare function createTemplateDispatchers(set: SetState<CalendarStore>): TemplateDispatchers;
