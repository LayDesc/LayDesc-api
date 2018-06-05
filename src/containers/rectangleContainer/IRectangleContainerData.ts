import {IMarginData} from "../../geometry/generic/Margin";
import {IRectangleData} from "../../geometry/Rectangle";

export interface IRectangleContainerData extends IRectangleData {
    margin: IMarginData;
}