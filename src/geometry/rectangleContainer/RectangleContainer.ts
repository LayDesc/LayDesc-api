import {IRectangleContainerSettings} from "./IRectangleContainerSettings";
import {IRectangleContainerData} from "./IRectangleContainerData";
import {IMarginData} from "../generic/Margin";
import {Margin} from "../generic/Margin";
import {Rectangle} from "../generic/Rectangle";

export class RectangleContainer extends Rectangle implements IRectangleContainerData {
    margin: IMarginData;

    constructor(settings: IRectangleContainerSettings = {}) {
        super(settings);
        this.margin = new Margin(settings.margin);

        if (settings instanceof RectangleContainer) return (settings as RectangleContainer);
    }
}