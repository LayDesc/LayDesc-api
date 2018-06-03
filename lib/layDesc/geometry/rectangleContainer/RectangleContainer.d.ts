import { IRectangleContainerSettings } from "./IRectangleContainerSettings";
import { IRectangleContainerData } from "./IRectangleContainerData";
import { IMarginData } from "../generic/Margin";
import { Rectangle } from "../generic/Rectangle";
export declare class RectangleContainer extends Rectangle implements IRectangleContainerData {
    margin: IMarginData;
    constructor(settings?: IRectangleContainerSettings);
}
