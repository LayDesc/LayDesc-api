import {IPageTemplateSettings} from "../pageTemplate/IPageTemplateSettings";

export interface IPageSettings extends IPageTemplateSettings {
    pageTemplate?: IPageTemplateSettings;
}