define(["require", "exports", "../env", "../page/PageTemplate"], function (require, exports, env_1, PageTemplate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Document = /** @class */ (function () {
        function Document(documentSettings) {
            if (documentSettings === void 0) { documentSettings = Document.defaultSettings; }
            this.guides = Document.defaultSettings.guides;
            this.pageTemplates = {};
            this.guides = documentSettings.guides ? documentSettings.guides : this.guides;
            if (documentSettings.pageTemplates) {
                for (var iterator in documentSettings.pageTemplates) {
                    this.addPageTemplate(documentSettings.pageTemplates[iterator]);
                }
            }
            env_1.env.helloMessage();
        }
        Object.defineProperty(Document, "defaultSettings", {
            get: function () {
                return this._defaultSettings;
            },
            enumerable: true,
            configurable: true
        });
        Document.prototype.addPageTemplate = function (pageTemplate) {
            if (env_1.env.DEBUG) {
                if (pageTemplate.name in this.pageTemplates)
                    console.info(pageTemplate.name + " already exists in the names the registered template list. The last " + pageTemplate.name + " addition removes the previous one.");
            }
            if (pageTemplate instanceof PageTemplate_1.PageTemplate) {
                this.pageTemplates[pageTemplate.name] = pageTemplate;
            }
            else {
                this.pageTemplates[pageTemplate.name] = new PageTemplate_1.PageTemplate(pageTemplate.name, pageTemplate);
            }
        };
        Document._defaultSettings = {
            guides: {
                show: true,
                horizontal: [],
                vertical: [],
            },
        };
        return Document;
    }());
    exports.Document = Document;
});
