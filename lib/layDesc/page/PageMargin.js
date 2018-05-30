define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageMargin = /** @class */ (function () {
        function PageMargin(settings) {
            if (settings === void 0) { settings = PageMargin.defaultSettings; }
            this.top = PageMargin.defaultSettings.top;
            this.right = PageMargin.defaultSettings.right;
            this.bottom = PageMargin.defaultSettings.bottom;
            this.left = PageMargin.defaultSettings.left;
            this.top = settings.top ? settings.top : this.top;
            this.right = settings.right ? settings.right : this.right;
            this.bottom = settings.bottom ? settings.bottom : this.bottom;
            this.left = settings.left ? settings.left : this.left;
        }
        Object.defineProperty(PageMargin, "defaultSettings", {
            get: function () {
                return this._defaultSettings;
            },
            enumerable: true,
            configurable: true
        });
        PageMargin._defaultSettings = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
        };
        return PageMargin;
    }());
    exports.PageMargin = PageMargin;
});
