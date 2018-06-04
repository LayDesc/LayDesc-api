import { IDocumentSettings } from "./IDocumentSettings";
import { IDocumentData, IListOfPageTemplate } from "./IDocumentData";
import { IGuideData } from "../guide/IGuideData";
import { Page } from "../page/page/Page";
import { IPageTemplateSettings } from "../page/pageTemplate/IPageTemplateSettings";
import { IPageSettings } from "../page/page/IPageSettings";
export declare class Document implements IDocumentData {
    guides: IGuideData;
    listOfPageTemplate: IListOfPageTemplate;
    arrayOfPage: Page[];
    private static _defaultSettings;
    constructor(settings?: IDocumentSettings);
    addPageTemplate(pageTemplate: IPageTemplateSettings): void;
    addPage(page: IPageSettings): void;
    generate(): Promise<IDocumentData>;
    private _createJson();
}
