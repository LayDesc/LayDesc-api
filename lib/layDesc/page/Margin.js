define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Margin = /** @class */ (function () {
        function Margin(settings) {
            if (settings === void 0) { settings = Margin.defaultSettings; }
            this.top = Margin.defaultSettings.top;
            this.right = Margin.defaultSettings.right;
            this.bottom = Margin.defaultSettings.bottom;
            this.left = Margin.defaultSettings.left;
            this.top = settings.top ? settings.top : this.top;
            this.right = settings.right ? settings.right : this.right;
            this.bottom = settings.bottom ? settings.bottom : this.bottom;
            this.left = settings.left ? settings.left : this.left;
        }
        Object.defineProperty(Margin, "defaultSettings", {
            get: function () {
                return this._defaultSettings;
            },
            enumerable: true,
            configurable: true
        });
        Margin._defaultSettings = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
        };
        return Margin;
    }());
    exports.Margin = Margin;
});
