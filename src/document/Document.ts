import {IDocumentSettings} from "./IDocumentSettings";
import {env} from "../env";
import {PageTemplate, PageTemplate_ObjectOrSettings} from "../page/pageTemplate/PageTemplate";
import {IDocumentData, IPageTemplates} from "./IDocumentData";
import {IGuideData} from "../guide/IGuideData";

export type Document_ObjectOrSettings =  Document | IDocumentSettings;

export class Document implements IDocumentData {
    public guides: IGuideData;
    public pageTemplates: IPageTemplates;

    private static _defaultSettings = {
        guides: {
            show: true,
            horizontal: [],
            vertical: [],
        },
        pageTemplates: {},
    };

    constructor(settings: IDocumentSettings = {}) {
        if (settings.guides !== void 0) {
            this.guides = {
                vertical: [],
                horizontal: [],
                show: Document._defaultSettings.guides.show,
            };
            this.guides.show = (settings.guides.show === void 0) ? Document._defaultSettings.guides.show : settings.guides.show;
            this.guides.horizontal = (settings.guides.horizontal === void 0) ? Document._defaultSettings.guides.horizontal : settings.guides.horizontal;
            this.guides.vertical = (settings.guides.vertical === void 0) ? Document._defaultSettings.guides.vertical : settings.guides.vertical;
        } else {
            this.guides = Document._defaultSettings.guides;
        }

        this.pageTemplates = {};
        if (settings.pageTemplates !== void 0) {
            for (let iterator in settings.pageTemplates) {
                this.addPageTemplate(settings.pageTemplates[iterator]);
            }
        }

        env._private._helloMessage();
    }

    public addPageTemplate(pageTemplate: PageTemplate_ObjectOrSettings) {
        if (env.parameters.DEBUG) {
            if (pageTemplate.name in this.pageTemplates) console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
        }
        if (pageTemplate instanceof PageTemplate) {
            this.pageTemplates[pageTemplate.name] = pageTemplate;
        } else {
            this.pageTemplates[pageTemplate.name] = new PageTemplate({
                name: pageTemplate.name,
                margin: pageTemplate.margin,
                containers: pageTemplate.containers,
            });
        }
    }

    public generate() {

    }
}