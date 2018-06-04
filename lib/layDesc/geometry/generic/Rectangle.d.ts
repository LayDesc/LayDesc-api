import { IPositionData, IPositionSettings, Position } from "./Position";
import { ISizeData, ISizeSettings, Size } from "./Size";
import { UNIT } from "./UNIT";
import { ANCHOR } from "./ANCHOR";
export declare class Rectangle implements IRectangleData {
    anchor: ANCHOR;
    position: Position;
    size: Size;
    unit: UNIT;
    private static _defaultSettings;
    constructor(settings?: IRectangleSettings);
    generate(): IRectangleData;
}
export interface IRectangleSettings {
    anchor?: ANCHOR;
    position?: IPositionSettings;
    size?: ISizeSettings;
    unit?: UNIT;
}
export interface IRectangleData {
    anchor: ANCHOR;
    position: IPositionData;
    size: ISizeData;
    unit: UNIT;
}
