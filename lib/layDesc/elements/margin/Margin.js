define(["require", "exports", "../Unit"], function (require, exports, Unit_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Margin = /** @class */ (function () {
        function Margin(settings) {
            if (settings === void 0) { settings = {}; }
            this.top = (settings.top === void 0) ? Margin._defaultSettings.top : settings.top;
            this.right = (settings.right === void 0) ? Margin._defaultSettings.right : settings.right;
            this.bottom = (settings.bottom === void 0) ? Margin._defaultSettings.bottom : settings.bottom;
            this.left = (settings.left === void 0) ? Margin._defaultSettings.left : settings.left;
            this.unit = (settings.unit === void 0) ? Margin._defaultSettings.unit : settings.unit;
        }
        Margin._defaultSettings = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
            unit: Unit_1.Unit.MM,
        };
        return Margin;
    }());
    exports.Margin = Margin;
});
