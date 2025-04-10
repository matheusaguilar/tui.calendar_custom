import type { TemplateName } from "../template/default";
interface Props {
    template: TemplateName;
    param?: any;
    as?: keyof HTMLElementTagNameMap;
}
export declare function Template({ template, param, as: tagName }: Props): import("preact").VNode<any> | import("preact").VNode<{
    className: string;
}> | null;
export {};
