import { PageTemplate } from "../pageTemplate/PageTemplate";
import { IPageTemplateSettings } from "../pageTemplate/IPageTemplateSettings";
export declare class Page extends PageTemplate {
    constructor(settings: IPageTemplateSettings);
    autoContent(): Promise<void>;
}
