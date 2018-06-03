import { IPageTemplateData } from "../pageTemplate/IPageTemplateData";
export interface IPageData extends IPageTemplateData {
    pageTemplate?: IPageTemplateData;
}
