import {IPaddingData} from "../../geometry/generic/Padding";
import {IPageTemplateData} from "../pageTemplate/IPageTemplateData";

export interface IPageData extends IPageTemplateData {
    pageTemplateName?: string;
}
