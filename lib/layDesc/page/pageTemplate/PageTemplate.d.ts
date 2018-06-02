import { Margin } from "../../geometry/generic/Margin";
import { IPageTemplateSettings } from "./IPageTemplateSettings";
import { IPageTemplateData } from "./IPageTemplateData";
import { RectangleContainer } from "../../elements/rectangleContainer/RectangleContainer";
import { DocumentChildren } from "../../document/DocumentChildren";
import { IRectangleContainerSettings } from "../../elements/rectangleContainer/IRectangleContainerSettings";
export declare class PageTemplate extends DocumentChildren implements IPageTemplateData {
    margin: Margin;
    containers: RectangleContainer[];
    name: string;
    private static _defaultSettings;
    constructor(settings: IPageTemplateSettings);
    addArrayOfContainers(containers: IRectangleContainerSettings[]): RectangleContainer[];
}
