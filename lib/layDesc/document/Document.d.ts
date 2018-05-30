import { IDocumentSettings } from "./IDocumentSettings";
import { IPageTemplateSettings, PageTemplate } from "../page/PageTemplate";
import { IParameters } from "../guide/IParameters";
export declare class Document {
    guides: IParameters;
    pageTemplates: {
        [key: string]: IPageTemplateSettings | PageTemplate;
    };
    static readonly defaultSettings: {
        guides: IParameters;
    };
    private static _defaultSettings;
    constructor(documentSettings?: IDocumentSettings);
    addPageTemplate(pageTemplate: IPageTemplateSettings | PageTemplate): void;
}
