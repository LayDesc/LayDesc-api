import {UNIT} from "../../geometry/generic/UNIT";
import {IFontData} from "../../elements/font/IFontData";

export interface IRectangleContainerGeneratorSettings {
    width: number;
    height: number;
    unit: UNIT;
    content: string;
    fontSettings: IFontData,
}