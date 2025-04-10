interface StampObj extends Record<string, any> {
    __fe_id?: number;
}
export declare function stamp(obj: StampObj): number;
export declare function hasStamp(obj: StampObj): boolean;
export {};
