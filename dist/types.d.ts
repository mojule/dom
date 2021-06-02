export declare type ElementAttributes = Record<string, any> & {
    style?: string | Partial<CSSStyleDeclaration>;
    data?: Record<string, string | undefined>;
};
export declare type SArg = SVGElement | string | ElementAttributes;
export declare type HArg = Node | string | ElementAttributes;
export interface StrictSelect {
    <K extends keyof HTMLElementTagNameMap>(selectors: K, el?: ParentNode): HTMLElementTagNameMap[K];
    <K extends keyof SVGElementTagNameMap>(selectors: K, el?: ParentNode): SVGElementTagNameMap[K];
    <E extends Element = Element>(selectors: string, el?: ParentNode): E;
}
export interface H {
    <K extends keyof HTMLElementTagNameMap>(name: K, ...args: HArg[]): HTMLElementTagNameMap[K];
    (name: string, ...args: HArg[]): HTMLElement;
}
export declare type CreateTag<K extends keyof HTMLElementTagNameMap> = (...args: HArg[]) => HTMLElementTagNameMap[K];
