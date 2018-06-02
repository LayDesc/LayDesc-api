import { IMarginData } from "../../geometry/generic/Margin";
import { RectangleContainer } from "../../geometry/rectangleContainer/RectangleContainer";
export interface IPageTemplateData {
    name: string;
    margin: IMarginData;
    containers: RectangleContainer[];
}
