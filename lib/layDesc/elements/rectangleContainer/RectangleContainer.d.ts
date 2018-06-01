import { IRectangleContainerSettings } from "./IRectangleContainerSettings";
import { IRectangleContainerData } from "./IRectangleContainerData";
import { IMarginData } from "../margin/IMarginData";
export declare type RectangleContainer_ObjectOrSettings = IRectangleContainerSettings | RectangleContainer;
export declare class RectangleContainer implements IRectangleContainerData {
    width: number;
    height: number;
    margin: IMarginData;
    private static _defaultSettings;
    constructor(settings?: IRectangleContainerSettings);
}
