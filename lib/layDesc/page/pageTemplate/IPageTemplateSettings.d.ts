import { IMarginSettings } from "../../geometry/generic/Margin";
import { IRectangleContainerSettings } from "../../geometry/rectangleContainer/IRectangleContainerSettings";
export interface IPageTemplateSettings {
    name: string;
    margin?: IMarginSettings;
    containers?: IRectangleContainerSettings[];
}
