// MARGIN
export interface IMarginSettings {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export class Margin {
    public top = Margin.defaultSettings.top;
    public right = Margin.defaultSettings.right;
    public bottom = Margin.defaultSettings.bottom;
    public left = Margin.defaultSettings.left;

    public static get defaultSettings() {
        return this._defaultSettings;
    }

    private static _defaultSettings: IMarginSettings = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };

    constructor(settings: IMarginSettings = Margin.defaultSettings) {
        this.top = settings.top ? settings.top : this.top;
        this.right = settings.right ? settings.right : this.right;
        this.bottom = settings.bottom ? settings.bottom : this.bottom;
        this.left = settings.left ? settings.left : this.left;
    }
}