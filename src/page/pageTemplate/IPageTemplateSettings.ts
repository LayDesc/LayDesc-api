import {IMarginSettings} from "../../geometry/generic/Margin";
import {IRectangleContainerSettings} from "../../containers/rectangleContainer/IRectangleContainerSettings";
import {UNIT} from "../../geometry/generic/UNIT";

export interface IPageTemplateSettings {
    name: string;
    margin?: IMarginSettings;
    containers?: IRectangleContainerSettings[];
    unit?: UNIT
}