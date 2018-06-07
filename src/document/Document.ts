import {IDocumentSettings} from "./IDocumentSettings";
import {env} from "../env";
import {PageTemplate} from "../page/pageTemplate/PageTemplate";
import {IDocumentData, IListOfPageTemplate} from "./IDocumentData";
import {IGuideData} from "../guide/IGuideData";
import {Page} from "../page/page/Page";
import {IPageTemplateSettings} from "../page/pageTemplate/IPageTemplateSettings";
import {IPageSettings} from "../page/page/IPageSettings";
import {RectangleContainer} from "../containers/rectangleContainer/RectangleContainer";
import {IPageData} from "../page/page/IPageData";
import {Horizontal} from "../guide/Horizontal";
import {Vertical} from "../guide/Vertical";

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

    private _this: Document = this;

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

        this.listOfPageTemplate[pageTemplate.name] = new PageTemplateDocumentChild(pageTemplate).addDocumentParent(this);

    }

    public addPage(page: IPageSettings) {
        this.listOfPageTemplate[page.name] = new PageDocumentChild(page).addDocumentParent(this);
    }

    public generate(): Promise<IDocumentData> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this._createJson());
            }, 3000)
        });
    }

    private _createJson(): IDocumentData {
        // generate guides
        const arrayOfHorizontal: Horizontal[] = [];
        for(const horizontal of this.guides.horizontal) {
            arrayOfHorizontal.push(
                {
                    y: horizontal.y
                }
            )
        }
        const arrayOfVertical: Vertical[] = [];
        for(const vertical of this.guides.vertical) {
            arrayOfVertical.push(
                {
                    x: vertical.x
                }
            )
        }
        let guides: IGuideData = {
            show: this.guides.show,
            horizontal: arrayOfHorizontal,
            vertical: arrayOfVertical,
        };

        // generate arrayOfPage
        const arrayOfPage: IPageData[] = [];
        for(const page of this.arrayOfPage) {
            arrayOfPage.push(page.generate());
        }

        return {
            guides: guides,
            arrayOfPage: arrayOfPage,
            listOfPageTemplate: this.listOfPageTemplate,
        }
    }
}

/**
 * @hidden
 */
class PageDocumentChild extends Page {
    constructor(settings: IPageSettings) {

        // @todo Which object should be returned ?
        if ((settings as Page) instanceof Page ) settings = {
            name: settings.name,
            unit: settings.unit,
            containers: settings.containers,
            margin: settings.margin,
            pageTemplateName: settings.pageTemplateName,
        };
        super(settings);
    }
    addDocumentParent(document: Document) {
        this._documentParents.push( document );
        return this;
    }
}

/**
 * @hidden
 */
class PageTemplateDocumentChild extends PageTemplate {
    constructor(settings: IPageSettings) {

        // @todo Which object should be returned ?
        if ((settings as PageTemplate) instanceof PageTemplate ) settings = {
            pageTemplateName: settings.pageTemplateName,
            margin: settings.margin,
            containers: settings.containers,
            unit: settings.unit,
            name: settings.name,
        };
        super(settings);
    }
    addDocumentParent(document: Document) {
        this._documentParents.push( document );
        return this;
    }
}

// layDesc initialisation
env._helloMessage();
