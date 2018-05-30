import { IDocumentSettings } from "./IDocumentSettings";
import { PageTemplate } from "../page/PageTemplate";
import { IPageSettings } from "../page/IPageSettings";
import { IGuideSettings } from "../guide/IGuideSettings";
export declare class Document {
    guides: IGuideSettings;
    pageTemplates: {
        [key: string]: IPageSettings | PageTemplate;
    };
    static readonly defaultSettings: {
        guides: IGuideSettings;
    };
    private static _defaultSettings;
    constructor(documentSettings?: IDocumentSettings);
    addPageTemplate(pageTemplate: IPageSettings | PageTemplate): void;
    generate(): void;
}
