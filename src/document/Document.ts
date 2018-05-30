import {IDocumentSettings} from "./IDocumentSettings";
import {env} from "../env";
import {PageTemplate} from "../page/PageTemplate";
import {IPageSettings} from "../page/IPageSettings";
import {IGuideSettings} from "../guide/IGuideSettings";

export class Document {
    public guides = Document.defaultSettings.guides;

    public pageTemplates: { [key: string]: IPageSettings | PageTemplate } = {};

    public static get defaultSettings() {
        return this._defaultSettings;
    }

    private static _defaultSettings = {
        guides: {
            show: true,
            horizontal: [],
            vertical: [],
        },
    } as { guides: IGuideSettings };

    constructor(documentSettings: IDocumentSettings = Document.defaultSettings) {
        this.guides = documentSettings.guides ? documentSettings.guides : this.guides;

        if (documentSettings.pageTemplates) {
            for (let iterator in documentSettings.pageTemplates) {
                this.addPageTemplate(documentSettings.pageTemplates[iterator]);
            }
        }

        env._private._helloMessage();
    }

    public addPageTemplate(pageTemplate: IPageSettings | PageTemplate) {
        if (env.parameters.DEBUG) {
            if (pageTemplate.name in this.pageTemplates) console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
        }
        if (pageTemplate instanceof PageTemplate) {
            this.pageTemplates[pageTemplate.name] = pageTemplate;
        } else {
            this.pageTemplates[pageTemplate.name] = new PageTemplate(pageTemplate.name, pageTemplate);
        }
    }

    public generate() {

    }
}

// interface IDocument {
//     settings: {
//         guides:
//     }
// }