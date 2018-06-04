import { Margin } from "../../geometry/generic/Margin";
import { IPageTemplateSettings } from "./IPageTemplateSettings";
import { IPageTemplateData } from "./IPageTemplateData";
import { RectangleContainer } from "../../geometry/rectangleContainer/RectangleContainer";
import { IRectangleContainerSettings } from "../../geometry/rectangleContainer/IRectangleContainerSettings";
import { Document } from "../../document/Document";
export declare class PageTemplate implements IPageTemplateData {
    margin: Margin;
    containers: RectangleContainer[];
    name: string;
    readonly documentParents: Document[];
    private _documentParents;
    private static _defaultSettings;
    constructor(settings: IPageTemplateSettings);
    addArrayOfContainers(containers: IRectangleContainerSettings[]): RectangleContainer[];
    generate(): IPageTemplateData;
}
