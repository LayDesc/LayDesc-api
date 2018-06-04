import { PageTemplate } from "../pageTemplate/PageTemplate";
import { IPageData } from "./IPageData";
import { IPageSettings } from "./IPageSettings";
export declare class Page extends PageTemplate implements IPageData {
    pageTemplateName?: string;
    constructor(settings: IPageSettings);
    autoContent(): void;
    generate(): IPageData;
}
