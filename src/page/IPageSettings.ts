export interface IPageTemplateSettings_optional {
    marginSettings?: IPageMarginSettings;
}

export interface IPageSettings extends IPageTemplateSettings_optional {
    name: string;
}

export interface IPageMarginSettings {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}