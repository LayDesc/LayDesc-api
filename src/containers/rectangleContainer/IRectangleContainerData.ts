import {IMarginData} from "../../geometry/generic/Margin";
import {IRectangleData} from "../../geometry/Rectangle";
import {Text} from "../../elements/text/Text";
import {IContainerData} from "../generic/IContainerData";

export interface IRectangleContainerData extends IRectangleData, IContainerData  {
    margin: IMarginData;
}