import { PageTemplate } from "../pageTemplate/PageTemplate";
import { IPageData } from "./IPageData";
import { IPageTemplateData } from "../pageTemplate/IPageTemplateData";
import { IPageSettings } from "./IPageSettings";
export declare class Page extends PageTemplate implements IPageData {
    pageTemplate?: IPageTemplateData;
    constructor(settings: IPageSettings);
    autoContent(): Promise<void>;
}
