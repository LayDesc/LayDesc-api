import { IGuideSettings } from "../guide/IGuideSettings";
import { IPageSettings } from "../page/page/IPageSettings";
import { IPageTemplateSettings } from "../page/pageTemplate/IPageTemplateSettings";
export interface IDocumentSettings {
    guides?: IGuideSettings;
    pageTemplates?: IPageTemplateSettings[];
    arrayOfPage?: IPageSettings[];
}
