import {UNIT} from "../../geometry/generic/UNIT";
import {IFontSettings} from "../font/IFontSettings";
import {Font} from "../font/Font";
import {IPaddingData, IPaddingSettings, Padding} from "../../geometry/generic/Padding";
import {IFontData} from "../font/IFontData";

export class TextStyle implements ITextStyleData {
    font: Font;
    space: Padding;
    unit: UNIT;

    private static _defaultSettings = {
        unit: UNIT.MM,
    };

    constructor(settings: ITextStyleSettings = {}) {
        this.font = new Font(settings.font);
        this.space = new Padding(settings.space);
        this.unit = (settings.unit === void 0) ? TextStyle._defaultSettings.unit : settings.unit;
    }

    generate(): ITextStyleData {
        return {
            font: this.font.generate(),
            space: this.space.generate(),
            unit:this.unit,
        }
    }
}

export interface ITextStyleData {
    font: IFontData;
    space: IPaddingData;
    unit: UNIT;
}

export interface ITextStyleSettings {
    font?: IFontSettings;
    space?: IPaddingSettings;
    unit?: UNIT;
}
