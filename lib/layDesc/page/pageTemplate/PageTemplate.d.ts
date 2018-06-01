import { Margin } from "../../elements/margin/Margin";
import { IPageTemplateSettings } from "./IPageTemplateSettings";
import { IPageTemplateData } from "./IPageTemplateData";
import { RectangleContainer, RectangleContainer_ObjectOrSettings } from "../../elements/rectangleContainer/RectangleContainer";
export declare type PageTemplate_ObjectOrSettings = PageTemplate | IPageTemplateSettings;
export declare class PageTemplate implements IPageTemplateData {
    margin: Margin;
    containers: RectangleContainer[];
    name: string;
    private static _defaultSettings;
    constructor(settings: IPageTemplateSettings);
    addListOfContainers(containers: RectangleContainer_ObjectOrSettings[]): RectangleContainer[];
}
