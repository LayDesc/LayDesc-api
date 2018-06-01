import {IGuideData} from "../guide/IGuideData";
import {IPageTemplateData} from "../page/pageTemplate/IPageTemplateData";

export interface IDocumentData {
    guides: IGuideData;
    pageTemplates: IPageTemplates;
}

export interface IPageTemplates {
    [key: string]: IPageTemplateData;
}