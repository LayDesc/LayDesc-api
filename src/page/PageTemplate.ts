import {PageMargin} from "./PageMargin";
import {IPageTemplateSettings_optional} from "./IPageSettings";

export class PageTemplate {
    public margin: PageMargin;

    public static get defaultSettings() {
        return this._defaultSettings;
    }

    private static _defaultSettings: IPageTemplateSettings_optional = {
        marginSettings: PageMargin.defaultSettings,
    };

    constructor(
        public name: string,
        settings: IPageTemplateSettings_optional = PageTemplate.defaultSettings
    ) {
        this.margin = new PageMargin(settings.marginSettings)
    }
}