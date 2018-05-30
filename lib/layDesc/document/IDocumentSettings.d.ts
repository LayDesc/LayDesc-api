import { IPageTemplateSettings, PageTemplate } from "../page/PageTemplate";
import { IParameters } from "../guide/IParameters";
export interface IDocumentSettings {
    guides?: IParameters;
    pageTemplates?: IPageTemplateSettings[] | PageTemplate[];
}
