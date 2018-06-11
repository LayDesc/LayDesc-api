import {IPaddingData} from "../../geometry/generic/Padding";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {UNIT} from "../../geometry/generic/UNIT";

export interface IPageTemplateData {
    name: string;
    margin: IPaddingData;
    containers: IRectangleContainerData[];
    unit: UNIT;
}
