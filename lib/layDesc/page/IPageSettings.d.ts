import { IMarginSettings } from "../elements/margin/IMarginSettings";
export interface IPageTemplateSettings_optional {
    marginSettings?: IMarginSettings;
}
export interface IPageSettings extends IPageTemplateSettings_optional {
    name: string;
}
