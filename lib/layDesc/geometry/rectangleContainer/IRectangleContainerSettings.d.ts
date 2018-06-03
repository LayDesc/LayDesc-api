import { IMarginSettings } from "../generic/Margin";
import { IRectangleSettings } from "../generic/Rectangle";
export interface IRectangleContainerSettings extends IRectangleSettings {
    margin?: IMarginSettings;
}
