import {IMarginData} from "../../geometry/generic/Margin";
import {IRectangleData} from "../../geometry/Rectangle";
import {UNIT} from "../../geometry/generic/UNIT";

export interface IRectangleContainerData extends IRectangleData {
    margin: IMarginData;
}