import {IMarginSettings} from "./IMarginSettings";
import {IMarginData} from "./IMarginData";
import {Unit} from "../Unit";

export type Margin_ObjectOrSettings = Margin | IMarginSettings;

export class Margin implements IMarginData {
    public top: number;
    public right: number;
    public bottom: number;
    public left: number;
    public unit: Unit;

    private static _defaultSettings = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        unit: Unit.MM,
    };

    constructor(settings: IMarginSettings = {}) {
        this.top    = (settings.top === void 0)    ? Margin._defaultSettings.top    : settings.top;
        this.right  = (settings.right === void 0)  ? Margin._defaultSettings.right  : settings.right;
        this.bottom = (settings.bottom === void 0) ? Margin._defaultSettings.bottom : settings.bottom;
        this.left   = (settings.left === void 0)   ? Margin._defaultSettings.left   : settings.left;
        this.unit   = (settings.unit === void 0)   ? Margin._defaultSettings.unit   : settings.unit;
    }
}