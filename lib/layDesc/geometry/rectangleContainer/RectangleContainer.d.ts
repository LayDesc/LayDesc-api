import { IRectangleContainerSettings } from "./IRectangleContainerSettings";
import { IRectangleContainerData } from "./IRectangleContainerData";
import { Margin } from "../generic/Margin";
import { Rectangle } from "../generic/Rectangle";
export declare class RectangleContainer extends Rectangle implements IRectangleContainerData {
    margin: Margin;
    constructor(settings?: IRectangleContainerSettings);
    generate(): IRectangleContainerData;
}
