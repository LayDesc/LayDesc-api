import {UNIT} from "./UNIT";

export class Padding implements IPaddingData {
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

    constructor(settings: IPaddingSettings = {}) {
        this.top    = (settings.top === void 0)    ? Padding._defaultSettings.top    : settings.top;
        this.right  = (settings.right === void 0)  ? Padding._defaultSettings.right  : settings.right;
        this.bottom = (settings.bottom === void 0) ? Padding._defaultSettings.bottom : settings.bottom;
        this.left   = (settings.left === void 0)   ? Padding._defaultSettings.left   : settings.left;
    }

    generate(): IPaddingData {
        return {
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
        }
    }
}

export interface IPaddingSettings {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export interface IPaddingData {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
