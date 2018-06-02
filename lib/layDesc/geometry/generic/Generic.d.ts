import { IPositionData, IPositionSettings, Position } from "./Position";
import { ISizeData, ISizeSettings, Size } from "./Size";
import { Unit } from "./Unit";
import { Anchor } from "./Anchor";
export declare class Generic implements IGenericData {
    anchor: Anchor;
    position: Position;
    size: Size;
    unit: Unit;
    private static _defaultSettings;
    constructor(settings?: IGenericSettings);
}
export interface IGenericSettings {
    anchor?: Anchor;
    position?: IPositionSettings;
    size?: ISizeSettings;
    unit?: Unit;
}
export interface IGenericData {
    anchor: Anchor;
    position: IPositionData;
    size: ISizeData;
    unit: Unit;
}
