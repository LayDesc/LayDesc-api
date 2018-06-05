import {IMarginSettings} from "../../geometry/generic/Margin";
import {IRectangleSettings} from "../../geometry/Rectangle";

export interface IRectangleContainerSettings extends IRectangleSettings {
    margin?: IMarginSettings;
}
