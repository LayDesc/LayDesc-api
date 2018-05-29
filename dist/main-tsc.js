"use strict";
var LayDesc;
(function (LayDesc) {
    LayDesc.DEBUG = false;
    const _DEBUG = true;
    class Document {
        constructor(documentSettings = Document.defaultSettings) {
            this.guides = Document.defaultSettings.guides;
            this.pageTemplates = {};
            this.guides = documentSettings.guides ? documentSettings.guides : this.guides;
            if (documentSettings.pageTemplates) {
                for (let iterator in documentSettings.pageTemplates) {
                    this.addPageTemplate(documentSettings.pageTemplates[iterator]);
                }
            }
            helloMessage();
        }
        static get defaultSettings() {
            return this._defaultSettings;
        }
        addPageTemplate(pageTemplate) {
            if (LayDesc.DEBUG) {
                if (pageTemplate.name in this.pageTemplates)
                    console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
            }
            if (pageTemplate instanceof PageTemplate) {
                this.pageTemplates[pageTemplate.name] = pageTemplate;
            }
            else {
                this.pageTemplates[pageTemplate.name] = new PageTemplate(pageTemplate.name, pageTemplate);
            }
        }
    }
    Document._defaultSettings = {
        guides: {
            show: true,
            horizontal: [],
            vertical: [],
        },
    };
    LayDesc.Document = Document;
    //GUIDES
    let Guides;
    (function (Guides) {
        class Horizontal {
            constructor(y = 10) {
                this.y = y;
            }
        }
        Guides.Horizontal = Horizontal;
        class Vertical {
            constructor(x = 10) {
                this.x = x;
            }
        }
        Guides.Vertical = Vertical;
    })(Guides = LayDesc.Guides || (LayDesc.Guides = {}));
    class Margin {
        constructor(settings = Margin.defaultSettings) {
            this.top = Margin.defaultSettings.top;
            this.right = Margin.defaultSettings.right;
            this.bottom = Margin.defaultSettings.bottom;
            this.left = Margin.defaultSettings.left;
            this.top = settings.top ? settings.top : this.top;
            this.right = settings.right ? settings.right : this.right;
            this.bottom = settings.bottom ? settings.bottom : this.bottom;
            this.left = settings.left ? settings.left : this.left;
        }
        static get defaultSettings() {
            return this._defaultSettings;
        }
    }
    Margin._defaultSettings = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };
    LayDesc.Margin = Margin;
    class PageTemplate {
        constructor(name, settings = PageTemplate.defaultSettings) {
            this.name = name;
            this.margin = new Margin(settings.marginSettings);
        }
        static get defaultSettings() {
            return this._defaultSettings;
        }
    }
    PageTemplate._defaultSettings = {
        marginSettings: Margin.defaultSettings,
    };
    LayDesc.PageTemplate = PageTemplate;
    function helloMessage() {
        const styles = [
            'color: blue',
        ].join(';');
        console.log(`%c*****************
     LayDesc
*****************`, styles);
    }
})(LayDesc || (LayDesc = {}));
