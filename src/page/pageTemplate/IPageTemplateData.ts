import {IMarginData} from "../../geometry/generic/Margin";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {UNIT} from "../../geometry/generic/UNIT";

export interface IPageTemplateData {
    name: string;
    margin: IMarginData;
    containers: IRectangleContainerData[];
    unit: UNIT;
}
