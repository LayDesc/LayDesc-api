import {IPositionData, IPositionSettings, Position} from "./Position";
import {ISizeData, ISizeSettings, Size} from "./Size";
import {Unit} from "./Unit";
import {Anchor} from "./Anchor";

export class Rectangle implements IRectangleData {
    anchor: Anchor;
    position: Position;
    size: Size;
    unit: Unit;

    private static _defaultSettings = {
        unit: Unit.MM,
        anchor: Anchor.TOP_LEFT,
    };

    constructor(settings: IRectangleSettings = {}) {
        this.anchor = (settings.anchor === void 0) ? Rectangle._defaultSettings.anchor : settings.anchor;
        this.position = new Position(settings.position);
        this.size = new Size(settings.size);
        this.unit = (settings.unit === void 0) ? Rectangle._defaultSettings.unit : settings.unit;
    }
}

export interface IRectangleSettings {
    anchor?: Anchor;
    position?: IPositionSettings;
    size?: ISizeSettings;
    unit?: Unit;
}

export interface IRectangleData {
    anchor: Anchor
    position: IPositionData;
    size: ISizeData;
    unit: Unit;
}
