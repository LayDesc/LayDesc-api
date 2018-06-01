import { PageTemplate_ObjectOrSettings } from "../page/pageTemplate/PageTemplate";
import { IGuideSettings } from "../guide/IGuideSettings";
export interface IDocumentSettings {
    guides?: IGuideSettings;
    pageTemplates?: PageTemplate_ObjectOrSettings[];
}
