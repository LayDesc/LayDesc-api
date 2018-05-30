define(["require", "exports", "./Margin"], function (require, exports, Margin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTemplate = /** @class */ (function () {
        function PageTemplate(name, settings) {
            if (settings === void 0) { settings = PageTemplate.defaultSettings; }
            this.name = name;
            this.margin = new Margin_1.Margin(settings.marginSettings);
        }
        Object.defineProperty(PageTemplate, "defaultSettings", {
            get: function () {
                return this._defaultSettings;
            },
            enumerable: true,
            configurable: true
        });
        PageTemplate._defaultSettings = {
            marginSettings: Margin_1.Margin.defaultSettings,
        };
        return PageTemplate;
    }());
    exports.PageTemplate = PageTemplate;
});
