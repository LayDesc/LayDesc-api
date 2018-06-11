import {IPaddingSettings} from "../../geometry/generic/Padding";
import {IRectangleSettings} from "../../geometry/Rectangle";
import {Text} from "../../elements/text/Text";
import {IContainerData} from "../generic/IContainerData";

export interface IRectangleContainerSettings extends IRectangleSettings, IContainerData {
    margin?: IPaddingSettings;
}
