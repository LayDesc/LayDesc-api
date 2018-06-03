import { IPositionData, IPositionSettings, Position } from "./Position";
import { ISizeData, ISizeSettings, Size } from "./Size";
import { Unit } from "./Unit";
import { Anchor } from "./Anchor";
export declare class Rectangle implements IRectangleData {
    anchor: Anchor;
    position: Position;
    size: Size;
    unit: Unit;
    private static _defaultSettings;
    constructor(settings?: IRectangleSettings);
}
export interface IRectangleSettings {
    anchor?: Anchor;
    position?: IPositionSettings;
    size?: ISizeSettings;
    unit?: Unit;
}
export interface IRectangleData {
    anchor: Anchor;
    position: IPositionData;
    size: ISizeData;
    unit: Unit;
}
