export declare class Size implements ISizeData {
    width: number;
    height: number;
    private static _defaultSettings;
    constructor(settings?: ISizeSettings);
    generate(): ISizeData;
}
export interface ISizeSettings {
    width?: number;
    height?: number;
}
export interface ISizeData {
    width: number;
    height: number;
}
