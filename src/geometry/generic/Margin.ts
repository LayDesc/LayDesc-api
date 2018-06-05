import {UNIT} from "./UNIT";

export class Margin implements IMarginData {
    public top: number;
    public right: number;
    public bottom: number;
    public left: number;

    private static _defaultSettings = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };

    constructor(settings: IMarginSettings = {}) {
        this.top    = (settings.top === void 0)    ? Margin._defaultSettings.top    : settings.top;
        this.right  = (settings.right === void 0)  ? Margin._defaultSettings.right  : settings.right;
        this.bottom = (settings.bottom === void 0) ? Margin._defaultSettings.bottom : settings.bottom;
        this.left   = (settings.left === void 0)   ? Margin._defaultSettings.left   : settings.left;
    }

    generate(): IMarginData {
        return {
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
        }
    }
}

export interface IMarginSettings {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export interface IMarginData {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
