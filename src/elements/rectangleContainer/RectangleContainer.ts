import {IRectangleContainerSettings} from "./IRectangleContainerSettings";
import {IRectangleContainerData} from "./IRectangleContainerData";
import {IMarginData} from "../../geometry/generic/Margin";
import {Margin} from "../../geometry/generic/Margin";

export class RectangleContainer implements IRectangleContainerData {
    public width: number;
    height: number;
    margin: IMarginData;

    private static _defaultSettings = {
        width: 10,
        height: 10,
        margin: new Margin(),
    };

    constructor(settings: IRectangleContainerSettings = {}) {
        this.width  = (settings.width === void 0)  ? RectangleContainer._defaultSettings.width  : settings.width;
        this.height = (settings.height === void 0) ? RectangleContainer._defaultSettings.height : settings.height;
        this.margin = new Margin(settings.margin);

        if (settings instanceof RectangleContainer) return (settings as RectangleContainer);
    }
}