import {IMarginData} from "../../geometry/generic/Margin";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";

export interface IPageTemplateData {
    name: string;
    margin: IMarginData;
    containers: IRectangleContainerData[];
}
