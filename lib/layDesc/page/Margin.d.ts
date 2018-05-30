export interface IMarginSettings {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export declare class Margin {
    top: number | undefined;
    right: number | undefined;
    bottom: number | undefined;
    left: number | undefined;
    static readonly defaultSettings: IMarginSettings;
    private static _defaultSettings;
    constructor(settings?: IMarginSettings);
}
