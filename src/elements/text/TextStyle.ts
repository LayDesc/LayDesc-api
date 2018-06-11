import {UNIT} from "../../geometry/generic/UNIT";
import {IFontSettings} from "../font/IFontSettings";
import {Font} from "../font/Font";
import {IMarginData, IMarginSettings, Margin} from "../../geometry/generic/Margin";
import {IFontData} from "../font/IFontData";

export class TextStyle implements ITextStyleData {
    font: Font;
    margin: Margin;
    unit: UNIT;

    private static _defaultSettings = {
        unit: UNIT.MM,
    };

    constructor(settings: ITextStyleSettings = {}) {
        this.font = new Font(settings.font);
        this.margin = new Margin(settings.margin);
        this.unit = (settings.unit === void 0) ? TextStyle._defaultSettings.unit : settings.unit;
    }

    generate(): ITextStyleData {
        return {
            font: this.font.generate(),
            margin: this.margin.generate(),
            unit:this.unit,
        }
    }
}

export interface ITextStyleData {
    font: IFontData;
    margin: IMarginData;
    unit: UNIT;
}

export interface ITextStyleSettings {
    font?: IFontSettings;
    margin?: IMarginSettings;
    unit?: UNIT;
}
