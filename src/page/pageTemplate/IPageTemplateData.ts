import {IMarginData} from "../../geometry/generic/Margin";
import {IRectangleContainerData} from "../../geometry/rectangleContainer/IRectangleContainerData";

export interface IPageTemplateData {
    name: string;
    margin: IMarginData;
    containers: IRectangleContainerData[];
}
