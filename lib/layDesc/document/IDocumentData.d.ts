import { IGuideData } from "../guide/IGuideData";
import { PageTemplate } from "../page/pageTemplate/PageTemplate";
export interface IDocumentData {
    guides: IGuideData;
    pageTemplates: IPageTemplates;
}
export interface IPageTemplates {
    [key: string]: PageTemplate;
}
