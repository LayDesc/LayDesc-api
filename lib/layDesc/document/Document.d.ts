import { IDocumentSettings } from "./IDocumentSettings";
import { PageTemplate_ObjectOrSettings } from "../page/pageTemplate/PageTemplate";
import { IDocumentData, IPageTemplates } from "./IDocumentData";
import { IGuideData } from "../guide/IGuideData";
export declare type Document_ObjectOrSettings = Document | IDocumentSettings;
export declare class Document implements IDocumentData {
    guides: IGuideData;
    pageTemplates: IPageTemplates;
    private static _defaultSettings;
    constructor(settings?: IDocumentSettings);
    addPageTemplate(pageTemplate: PageTemplate_ObjectOrSettings): void;
    generate(): void;
}
