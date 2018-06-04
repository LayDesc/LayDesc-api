import {IRectangleContainerSettings} from "./IRectangleContainerSettings";
import {IRectangleContainerData} from "./IRectangleContainerData";
import {Margin} from "../generic/Margin";
import {Rectangle} from "../generic/Rectangle";

export class RectangleContainer extends Rectangle implements IRectangleContainerData {
    margin: Margin;

    constructor(settings: IRectangleContainerSettings = {}) {
        super(settings);
        this.margin = new Margin(settings.margin);

        if (settings instanceof RectangleContainer) return (settings as RectangleContainer);
    }

    generate(): IRectangleContainerData {
        return {
            unit: this.unit,
            size: this.size.generate(),
            position: this.position.generate(),
            anchor: this.anchor,
            margin: this.margin.generate(),
        }
    }
}