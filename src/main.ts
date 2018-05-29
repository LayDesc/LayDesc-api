export namespace LayDesc {
    export let DEBUG = false;
    const _DEBUG = true;

    interface IDocumentSettings {
        guides?: Guides.IParameters;
        //todo ne pas laisser le choix entre IPageTemplateSettings[] | PageTemplate[] car ca gene la completion
        pageTemplates?: IPageTemplateSettings[] | PageTemplate[];
    }
    export class Document {
        public guides = Document.defaultSettings.guides;

        public pageTemplates: { [key: string]: IPageTemplateSettings | PageTemplate } = {};

        public static get defaultSettings() {
            return this._defaultSettings;
        }

        private static _defaultSettings = {
            guides: {
                show: true,
                horizontal: [],
                vertical: [],
            },
        } as {guides: Guides.IParameters};

        constructor(documentSettings: IDocumentSettings = Document.defaultSettings) {
            this.guides = documentSettings.guides ? documentSettings.guides : this.guides;

            if(documentSettings.pageTemplates) {
                for(let iterator in documentSettings.pageTemplates){
                    this.addPageTemplate(documentSettings.pageTemplates[iterator]);
                }
            }

            helloMessage();
        }

        public addPageTemplate(pageTemplate: IPageTemplateSettings | PageTemplate) {
            if(DEBUG){
                if (pageTemplate.name in this.pageTemplates) console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
            }
            if (pageTemplate instanceof PageTemplate) {
                this.pageTemplates[pageTemplate.name] = pageTemplate;
            } else {
                this.pageTemplates[pageTemplate.name] = new PageTemplate(pageTemplate.name, pageTemplate);
            }
        }
    }

    //GUIDES
    export namespace Guides {
        export interface IParameters {
            show: boolean;
            horizontal?: Guides.Horizontal[];
            vertical?: Guides.Vertical[];
        }

        export class Horizontal {
            constructor(public y = 10) {

            }
        }
        export class Vertical {
            constructor(public x = 10) {

            }
        }
    }

    // MARGIN
    interface IMarginSettings {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    export class Margin {
        public top = Margin.defaultSettings.top;
        public right = Margin.defaultSettings.right;
        public bottom = Margin.defaultSettings.bottom;
        public left = Margin.defaultSettings.left;

        public static get defaultSettings() {
            return this._defaultSettings;
        }

        private static _defaultSettings: IMarginSettings = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
        };

        constructor(settings: IMarginSettings = Margin.defaultSettings) {
            this.top = settings.top ? settings.top : this.top;
            this.right = settings.right ? settings.right : this.right;
            this.bottom = settings.bottom ? settings.bottom : this.bottom;
            this.left = settings.left ? settings.left : this.left;
        }
    }

    //PAGE TEMPLATE
    interface IPageTemplateSettings_optional {
        marginSettings?: IMarginSettings;
    }

    interface IPageTemplateSettings extends IPageTemplateSettings_optional {
        name: string;
    }

    export class PageTemplate {
        public margin: Margin;

        public static get defaultSettings() {
            return this._defaultSettings;
        }

        private static _defaultSettings: IPageTemplateSettings_optional = {
            marginSettings: Margin.defaultSettings,
        };

        constructor(
            public name: string,
            settings: IPageTemplateSettings_optional = PageTemplate.defaultSettings
        ) {
            this.margin = new Margin(settings.marginSettings)
        }
    }

    function helloMessage() {
        const styles = [
            'color: blue',
        ].join(';');
        console.log(`%c*****************
     LayDesc
*****************`, styles);
    }
}