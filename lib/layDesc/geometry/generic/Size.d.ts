export declare class Size implements ISizeData {
    width: number;
    height: number;
    private static _defaultSettings;
    constructor(settings?: ISizeSettings);
}
export interface ISizeSettings {
    width?: number;
    height?: number;
}
export interface ISizeData {
    width: number;
    height: number;
}
