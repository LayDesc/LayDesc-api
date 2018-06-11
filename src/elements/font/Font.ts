import {IFontData} from "./IFontData";
import {IFontSettings} from "./IFontSettings";
import {UNIT} from "../../geometry/generic/UNIT";

export class Font implements IFontData {

    fontFamily: string;
    fontSize: number;
    letterSpacing: number;
    lineHeight: number;
    unit: UNIT;


    setSettings(settings: IFontSettings) {
        this.fontFamily =    (settings.fontFamily === void 0)    ? this.fontFamily    : settings.fontFamily;
        this.fontSize =      (settings.fontSize === void 0)      ? this.fontSize      : settings.fontSize;
        this.letterSpacing = (settings.letterSpacing === void 0) ? this.letterSpacing : settings.letterSpacing;
        this.lineHeight =    (settings.lineHeight === void 0)    ? this.lineHeight    : settings.lineHeight;
        this.unit =          (settings.unit === void 0)          ? this.unit          : settings.unit;
    }

    // @todo name of function to generate data of object (getData() or generate() ?)
    generate(): IFontData {
        return {
            unit: this.unit,
            lineHeight: this.lineHeight,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            letterSpacing: this.letterSpacing,
        }
    }

    private static _defaultSettings = {
        fontFamily: "Arial",
        fontSize: 12,
        letterSpacing: 0,
        lineHeight: 15,
        unit: UNIT.PX,
    };

    constructor(settings: IFontSettings = {}) {
        this.fontFamily =    (settings.fontFamily === void 0)    ? Font._defaultSettings.fontFamily    : settings.fontFamily;
        this.fontSize =      (settings.fontSize === void 0)      ? Font._defaultSettings.fontSize      : settings.fontSize;
        this.letterSpacing = (settings.letterSpacing === void 0) ? Font._defaultSettings.letterSpacing : settings.letterSpacing;
        this.lineHeight =    (settings.lineHeight === void 0)    ? Font._defaultSettings.lineHeight    : settings.lineHeight;
        this.unit =          (settings.unit === void 0)          ? Font._defaultSettings.unit          : settings.unit;
    }

    fontSettingsToFontData(fontSettings: IFontSettings): IFontData {
        return {
            fontFamily:    (fontSettings.fontFamily === void 0)    ? this.fontFamily    : fontSettings.fontFamily,
            fontSize:      (fontSettings.fontSize === void 0)      ? this.fontSize      : fontSettings.fontSize,
            letterSpacing: (fontSettings.letterSpacing === void 0) ? this.letterSpacing : fontSettings.letterSpacing,
            lineHeight:    (fontSettings.lineHeight === void 0)    ? this.lineHeight    : fontSettings.lineHeight,
            unit:          (fontSettings.unit === void 0)          ? this.unit          : fontSettings.unit,
        }
    }
}