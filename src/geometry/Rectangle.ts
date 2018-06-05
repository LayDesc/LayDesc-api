import {IPositionData, IPositionSettings, Position} from "./generic/Position";
import {ISizeData, ISizeSettings, Size} from "./generic/Size";
import {UNIT} from "./generic/UNIT";
import {ANCHOR} from "./generic/ANCHOR";

export class Rectangle implements IRectangleData {
    anchor: ANCHOR;
    position: Position;
    size: Size;
    unit: UNIT;

    private static _defaultSettings = {
        unit: UNIT.MM,
        anchor: ANCHOR.TOP_LEFT,
    };

    constructor(settings: IRectangleSettings = {}) {
        this.anchor = (settings.anchor === void 0) ? Rectangle._defaultSettings.anchor : settings.anchor;
        this.position = new Position(settings.position);
        this.size = new Size(settings.size);
        this.unit = (settings.unit === void 0) ? Rectangle._defaultSettings.unit : settings.unit;
    }

    generate(): IRectangleData {
        return {
            anchor: this.anchor,
            position: this.position.generate(),
            size: this.size.generate(),
            unit: this.unit,
        }
    }
}

export interface IRectangleSettings {
    anchor?: ANCHOR;
    position?: IPositionSettings;
    size?: ISizeSettings;
    unit?: UNIT;
}

export interface IRectangleData {
    anchor: ANCHOR
    position: IPositionData;
    size: ISizeData;
    unit: UNIT;
}
