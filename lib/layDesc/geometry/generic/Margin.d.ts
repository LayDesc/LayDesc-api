import { Unit } from "./Unit";
export declare class Margin implements IMarginData {
    top: number;
    right: number;
    bottom: number;
    left: number;
    unit: Unit;
    private static _defaultSettings;
    constructor(settings?: IMarginSettings);
}
export interface IMarginSettings {
    unit?: Unit;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export interface IMarginData {
    unit: Unit;
    top: number;
    right: number;
    bottom: number;
    left: number;
}
