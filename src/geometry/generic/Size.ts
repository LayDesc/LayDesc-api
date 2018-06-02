export class Size implements ISizeData {
    width: number;
    height: number;

    private static _defaultSettings = {
        width: 10,
        height: 10,
    };

    constructor(settings: ISizeSettings = {}) {
        this.width  = (settings.width === void 0)  ? Size._defaultSettings.width  : settings.width;
        this.height = (settings.height === void 0) ? Size._defaultSettings.height : settings.height;
        if (settings instanceof Size ) return (settings as Size);
    }
}

export interface ISizeSettings {
    width?: number;
    height?: number;
}

export interface ISizeData {
    width: number;
    height: number;
}