import { PageTemplate } from "../page/PageTemplate";
import { IGuideSettings } from "../guide/IGuideSettings";
import { IPageSettings } from "../page/IPageSettings";
export interface IDocumentSettings {
    guides?: IGuideSettings;
    pageTemplates?: IPageSettings[] | PageTemplate[];
}
