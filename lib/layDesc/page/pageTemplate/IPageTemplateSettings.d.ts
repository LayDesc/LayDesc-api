import { IMarginSettings } from "../../elements/margin/IMarginSettings";
import { IRectangleContainerSettings } from "../../elements/rectangleContainer/IRectangleContainerSettings";
export interface IPageTemplateSettings {
    name: string;
    margin?: IMarginSettings;
    containers?: IRectangleContainerSettings[];
}
