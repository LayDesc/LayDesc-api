import { IGuideData } from "../guide/IGuideData";
import { IPageTemplateData } from "../page/pageTemplate/IPageTemplateData";
import { IPageData } from "../page/page/IPageData";
export interface IDocumentData {
    guides: IGuideData;
    listOfPageTemplate: IListOfPageTemplate;
    arrayOfPage: IPageData[];
}
export interface IListOfPageTemplate {
    [key: string]: IPageTemplateData;
}
