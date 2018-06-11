import {UNIT} from "../../geometry/generic/UNIT";
import {IFontData} from "../../elements/font/IFontData";
import {IContainerData} from "../../containers/generic/IContainerData";
import {Text} from "../../elements/text/Text";

export interface IRectangleContainerGeneratorSettings extends IContainerData {
    width: number;
    height: number;
    unit: UNIT;
}