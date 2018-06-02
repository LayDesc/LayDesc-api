define(["require", "exports", "../env", "../page/pageTemplate/PageTemplate", "../page/page/Page"], function (require, exports, env_1, PageTemplate_1, Page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Document = /** @class */ (function () {
        function Document(settings) {
            if (settings === void 0) { settings = {}; }
            if (settings.guides !== void 0) {
                this.guides = {
                    vertical: [],
                    horizontal: [],
                    show: Document._defaultSettings.guides.show,
                };
                this.guides.show = (settings.guides.show === void 0) ? Document._defaultSettings.guides.show : settings.guides.show;
                this.guides.horizontal = (settings.guides.horizontal === void 0) ? Document._defaultSettings.guides.horizontal : settings.guides.horizontal;
                this.guides.vertical = (settings.guides.vertical === void 0) ? Document._defaultSettings.guides.vertical : settings.guides.vertical;
            }
            else {
                this.guides = Document._defaultSettings.guides;
            }
            this.listOfPageTemplate = Document._defaultSettings.pageTemplates;
            if (settings.pageTemplates !== void 0) {
                for (var _i = 0, _a = settings.pageTemplates; _i < _a.length; _i++) {
                    var pageTemplate = _a[_i];
                    this.addPageTemplate(pageTemplate);
                }
            }
            this.arrayOfPage = Document._defaultSettings.arrayOfPage;
            if (settings.arrayOfPage !== void 0) {
                for (var _b = 0, _c = settings.arrayOfPage; _b < _c.length; _b++) {
                    var page = _c[_b];
                    this.addPage(page);
                }
            }
        }
        Document.prototype.addPageTemplate = function (pageTemplate) {
            if (env_1.env.parameters.DEBUG) {
                if (pageTemplate.name in this.listOfPageTemplate)
                    console.info(pageTemplate.name + " already exists in the names the registered template list. The last " + pageTemplate.name + " addition removes the previous one.");
            }
            this.listOfPageTemplate[pageTemplate.name] = new PageTemplate_1.PageTemplate(pageTemplate).addDocumentParent(this);
        };
        Document.prototype.addPage = function (page) {
            this.arrayOfPage.push(new Page_1.Page(page).addDocumentParent(this));
        };
        Document.prototype.generate = function () {
        };
        Document._defaultSettings = {
            guides: {
                show: true,
                horizontal: [],
                vertical: [],
            },
            pageTemplates: {},
            arrayOfPage: [],
        };
        return Document;
    }());
    exports.Document = Document;
    // layDesc initialisation
    env_1.env._helloMessage();
});
