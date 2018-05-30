import {IPageTemplateSettings, PageTemplate} from "../page/PageTemplate";
import {IParameters} from "../guide/IParameters";

export interface IDocumentSettings {
    guides?: IParameters;
    //todo ne pas laisser le choix entre IPageTemplateSettings[] | PageTemplate[] car ca gene la completion
    pageTemplates?: IPageTemplateSettings[] | PageTemplate[];
}