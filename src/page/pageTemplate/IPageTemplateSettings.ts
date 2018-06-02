import {IMarginSettings} from "../../geometry/generic/Margin";
import {IRectangleContainerSettings} from "../../elements/rectangleContainer/IRectangleContainerSettings";

export interface IPageTemplateSettings {
    name: string;
    margin?: IMarginSettings;
    containers?: IRectangleContainerSettings[];
}