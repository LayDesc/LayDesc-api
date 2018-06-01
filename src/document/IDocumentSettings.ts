import {PageTemplate_ObjectOrSettings} from "../page/pageTemplate/PageTemplate";
import {IGuideSettings} from "../guide/IGuideSettings";

export interface IDocumentSettings {
    guides?: IGuideSettings;
    //todo ne pas laisser le choix entre IPageSettings[] | PageTemplate[] car ca gene la completion
    pageTemplates?: PageTemplate_ObjectOrSettings[];
}