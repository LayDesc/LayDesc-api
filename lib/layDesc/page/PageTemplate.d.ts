import { Margin } from "../elements/margin/Margin";
import { IPageTemplateSettings_optional } from "./IPageSettings";
export declare class PageTemplate {
    name: string;
    margin: Margin;
    static readonly defaultSettings: IPageTemplateSettings_optional;
    private static _defaultSettings;
    constructor(name: string, settings?: IPageTemplateSettings_optional);
}
