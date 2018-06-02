import {IDocumentSettings} from "./IDocumentSettings";
import {env} from "../env";
import {PageTemplate} from "../page/pageTemplate/PageTemplate";
import {IDocumentData, IListOfPageTemplate} from "./IDocumentData";
import {IGuideData} from "../guide/IGuideData";
import {Page} from "../page/page/Page";
import {IPageTemplateSettings} from "../page/pageTemplate/IPageTemplateSettings";
import {IPageSettings} from "../page/page/IPageSettings";
import {RectangleContainer} from "../elements/rectangleContainer/RectangleContainer";

export class Document implements IDocumentData {
    public guides: IGuideData;
    public listOfPageTemplate: IListOfPageTemplate;
    public arrayOfPage: Page[];

    private static _defaultSettings = {
        guides: {
            show: true,
            horizontal: [],
            vertical: [],
        },
        pageTemplates: {},
        arrayOfPage: [],
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

        this.listOfPageTemplate = Document._defaultSettings.pageTemplates;
        if (settings.pageTemplates !== void 0) {
            for (const pageTemplate of settings.pageTemplates) {
                this.addPageTemplate(pageTemplate);
            }
        }

        this.arrayOfPage = Document._defaultSettings.arrayOfPage;
        if (settings.arrayOfPage !== void 0) {
            for(const page of settings.arrayOfPage) {
                this.addPage(page);
            }
        }
    }

    public addPageTemplate(pageTemplate: IPageTemplateSettings) {
        if (env.parameters.DEBUG) {
            if (pageTemplate.name in this.listOfPageTemplate) console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
        }
        this.listOfPageTemplate[pageTemplate.name] = new PageTemplate(pageTemplate).addDocumentParent(this);
    }

    public addPage(page: IPageSettings) {
        this.arrayOfPage.push(new Page(page).addDocumentParent(this));
    }

    public generate() {

    }
}

// layDesc initialisation
env._helloMessage();
