import { IMarginSettings } from "./PageMargin";
export interface IPageTemplateSettings_optional {
    marginSettings?: IMarginSettings;
}
export interface IPageTemplateSettings extends IPageTemplateSettings_optional {
    name: string;
}
