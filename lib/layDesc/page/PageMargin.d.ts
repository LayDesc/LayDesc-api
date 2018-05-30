import { IPageMarginSettings } from "./IPageSettings";
export declare class PageMargin {
    top: number | undefined;
    right: number | undefined;
    bottom: number | undefined;
    left: number | undefined;
    static readonly defaultSettings: IPageMarginSettings;
    private static _defaultSettings;
    constructor(settings?: IPageMarginSettings);
}
