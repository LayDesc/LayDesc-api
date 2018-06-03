import {IMarginData} from "../generic/Margin";
import {IRectangleData} from "../generic/Rectangle";

export interface IRectangleContainerData extends IRectangleData {
    margin: IMarginData;
}