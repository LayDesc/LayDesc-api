define(["require", "exports", "./PageMargin"], function (require, exports, PageMargin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTemplate = /** @class */ (function () {
        function PageTemplate(name, settings) {
            if (settings === void 0) { settings = PageTemplate.defaultSettings; }
            this.name = name;
            this.margin = new PageMargin_1.PageMargin(settings.marginSettings);
        }
        Object.defineProperty(PageTemplate, "defaultSettings", {
            get: function () {
                return this._defaultSettings;
            },
            enumerable: true,
            configurable: true
        });
        PageTemplate._defaultSettings = {
            marginSettings: PageMargin_1.PageMargin.defaultSettings,
        };
        return PageTemplate;
    }());
    exports.PageTemplate = PageTemplate;
});
