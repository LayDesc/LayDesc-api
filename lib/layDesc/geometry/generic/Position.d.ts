export declare class Position implements IPositionData {
    x: number;
    y: number;
    private static _defaultSettings;
    constructor(settings?: IPositionSettings);
}
export interface IPositionSettings {
    x?: number;
    y?: number;
}
export interface IPositionData {
    x: number;
    y: number;
}
