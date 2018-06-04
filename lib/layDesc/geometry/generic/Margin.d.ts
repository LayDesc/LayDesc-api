import { UNIT } from "./UNIT";
export declare class Margin implements IMarginData {
    top: number;
    right: number;
    bottom: number;
    left: number;
    unit: UNIT;
    private static _defaultSettings;
    constructor(settings?: IMarginSettings);
    generate(): IMarginData;
}
export interface IMarginSettings {
    unit?: UNIT;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export interface IMarginData {
    unit: UNIT;
    top: number;
    right: number;
    bottom: number;
    left: number;
}
