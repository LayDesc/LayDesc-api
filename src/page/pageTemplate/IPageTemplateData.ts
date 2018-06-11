import {IPaddingData} from "../../geometry/generic/Padding";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {UNIT} from "../../geometry/generic/UNIT";

export interface IPageTemplateData {
    name: string;
    pageMargin: IPaddingData;
    containers: IRectangleContainerData[];
    unit: UNIT;
}
