import {IDocumentSettings} from "./IDocumentSettings";
import {env} from "../env";
import {IPageTemplateSettings, PageTemplate} from "../page/PageTemplate";
import {IParameters} from "../guide/IParameters";

export class Document {
    public guides = Document.defaultSettings.guides;

    public pageTemplates: { [key: string]: IPageTemplateSettings | PageTemplate } = {};

    public static get defaultSettings() {
        return this._defaultSettings;
    }

    private static _defaultSettings = {
        guides: {
            show: true,
            horizontal: [],
            vertical: [],
        },
    } as { guides: IParameters };

    constructor(documentSettings: IDocumentSettings = Document.defaultSettings) {
        this.guides = documentSettings.guides ? documentSettings.guides : this.guides;

        if (documentSettings.pageTemplates) {
            for (let iterator in documentSettings.pageTemplates) {
                this.addPageTemplate(documentSettings.pageTemplates[iterator]);
            }
        }

        env.helloMessage();
    }

    public addPageTemplate(pageTemplate: IPageTemplateSettings | PageTemplate) {
        if (env.DEBUG) {
            if (pageTemplate.name in this.pageTemplates) console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
        }
        if (pageTemplate instanceof PageTemplate) {
            this.pageTemplates[pageTemplate.name] = pageTemplate;
        } else {
            this.pageTemplates[pageTemplate.name] = new PageTemplate(pageTemplate.name, pageTemplate);
        }
    }
}