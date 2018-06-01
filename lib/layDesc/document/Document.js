define(["require", "exports", "../env", "../page/pageTemplate/PageTemplate"], function (require, exports, env_1, PageTemplate_1) {
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
            this.pageTemplates = {};
            if (settings.pageTemplates !== void 0) {
                for (var iterator in settings.pageTemplates) {
                    this.addPageTemplate(settings.pageTemplates[iterator]);
                }
            }
            env_1.env._private._helloMessage();
        }
        Document.prototype.addPageTemplate = function (pageTemplate) {
            if (env_1.env.parameters.DEBUG) {
                if (pageTemplate.name in this.pageTemplates)
                    console.info(pageTemplate.name + " already exists in the names the registered template list. The last " + pageTemplate.name + " addition removes the previous one.");
            }
            if (pageTemplate instanceof PageTemplate_1.PageTemplate) {
                this.pageTemplates[pageTemplate.name] = pageTemplate;
            }
            else {
                this.pageTemplates[pageTemplate.name] = new PageTemplate_1.PageTemplate({
                    name: pageTemplate.name,
                    margin: pageTemplate.margin,
                    containers: pageTemplate.containers,
                });
            }
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
        };
        return Document;
    }());
    exports.Document = Document;
});
