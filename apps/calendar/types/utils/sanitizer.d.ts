/**
 * Add DOMPurify hook to handling exceptional rules for certain HTML attributes.
 * Should be set when the calendar instance is created.
 */
export declare function addAttributeHooks(): void;
/**
 * Remove all attribute sanitizing hooks.
 * Use it in `Calendar#destroy`.
 */
export declare function removeAttributeHooks(): void;
/**
 * Prevent XSS attack by sanitizing input string values via DOMPurify
 */
export declare function sanitize(str: string): string;
