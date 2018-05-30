import {IPageMarginSettings} from "./IPageSettings";

export class PageMargin {
    public top = PageMargin.defaultSettings.top;
    public right = PageMargin.defaultSettings.right;
    public bottom = PageMargin.defaultSettings.bottom;
    public left = PageMargin.defaultSettings.left;

    public static get defaultSettings() {
        return this._defaultSettings;
    }

    private static _defaultSettings: IPageMarginSettings = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };

    constructor(settings: IPageMarginSettings = PageMargin.defaultSettings) {
        this.top = settings.top ? settings.top : this.top;
        this.right = settings.right ? settings.right : this.right;
        this.bottom = settings.bottom ? settings.bottom : this.bottom;
        this.left = settings.left ? settings.left : this.left;
    }
}