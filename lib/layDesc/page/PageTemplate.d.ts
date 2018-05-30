import { PageMargin } from "./PageMargin";
import { IPageTemplateSettings_optional } from "./IPageSettings";
export declare class PageTemplate {
    name: string;
    margin: PageMargin;
    static readonly defaultSettings: IPageTemplateSettings_optional;
    private static _defaultSettings;
    constructor(name: string, settings?: IPageTemplateSettings_optional);
}
