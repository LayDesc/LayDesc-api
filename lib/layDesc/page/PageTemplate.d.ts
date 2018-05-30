import { IMarginSettings, Margin } from "./Margin";
export interface IPageTemplateSettings_optional {
    marginSettings?: IMarginSettings;
}
export interface IPageTemplateSettings extends IPageTemplateSettings_optional {
    name: string;
}
export declare class PageTemplate {
    name: string;
    margin: Margin;
    static readonly defaultSettings: IPageTemplateSettings_optional;
    private static _defaultSettings;
    constructor(name: string, settings?: IPageTemplateSettings_optional);
}
