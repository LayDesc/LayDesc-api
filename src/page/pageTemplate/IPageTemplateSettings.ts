import {IPaddingSettings} from "../../geometry/generic/Padding";
import {IRectangleContainerSettings} from "../../containers/rectangleContainer/IRectangleContainerSettings";
import {UNIT} from "../../geometry/generic/UNIT";

export interface IPageTemplateSettings {
    name: string;
    pageMargin?: IPaddingSettings;
    containers?: IRectangleContainerSettings[];
    unit?: UNIT
}