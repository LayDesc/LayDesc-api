import { IMarginSettings } from "./IMarginSettings";
import { IMarginData } from "./IMarginData";
import { Unit } from "../Unit";
export declare type Margin_ObjectOrSettings = Margin | IMarginSettings;
export declare class Margin implements IMarginData {
    top: number;
    right: number;
    bottom: number;
    left: number;
    unit: Unit;
    private static _defaultSettings;
    constructor(settings?: IMarginSettings);
}
