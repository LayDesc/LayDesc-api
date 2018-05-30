import {PageTemplate} from "../page/PageTemplate";
import {IGuideSettings} from "../guide/IGuideSettings";
import {IPageSettings} from "../page/IPageSettings";

export interface IDocumentSettings {
    guides?: IGuideSettings;
    //todo ne pas laisser le choix entre IPageSettings[] | PageTemplate[] car ca gene la completion
    pageTemplates?: IPageSettings[] | PageTemplate[];
}