//PAGE TEMPLATE
import {IMarginSettings, Margin} from "./Margin";

export interface IPageTemplateSettings_optional {
    marginSettings?: IMarginSettings;
}

export interface IPageTemplateSettings extends IPageTemplateSettings_optional {
    name: string;
}

export class PageTemplate {
    public margin: Margin;

    public static get defaultSettings() {
        return this._defaultSettings;
    }

    private static _defaultSettings: IPageTemplateSettings_optional = {
        marginSettings: Margin.defaultSettings,
    };

    constructor(
        public name: string,
        settings: IPageTemplateSettings_optional = PageTemplate.defaultSettings
    ) {
        this.margin = new Margin(settings.marginSettings)
    }
}