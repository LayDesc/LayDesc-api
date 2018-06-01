import {IMarginData} from "../../elements/margin/IMarginData";
import {RectangleContainer} from "../../elements/rectangleContainer/RectangleContainer";

export interface IPageTemplateData {
    name: string;
    margin: IMarginData;
    containers: RectangleContainer[];
}
