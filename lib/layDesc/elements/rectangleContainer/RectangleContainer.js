define(["require", "exports", "../../geometry/generic/Margin"], function (require, exports, Margin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RectangleContainer = /** @class */ (function () {
        function RectangleContainer(settings) {
            if (settings === void 0) { settings = {}; }
            this.width = (settings.width === void 0) ? RectangleContainer._defaultSettings.width : settings.width;
            this.height = (settings.height === void 0) ? RectangleContainer._defaultSettings.height : settings.height;
            this.margin = new Margin_1.Margin(settings.margin);
            if (settings instanceof RectangleContainer)
                return settings;
        }
        RectangleContainer._defaultSettings = {
            width: 10,
            height: 10,
            margin: new Margin_1.Margin(),
        };
        return RectangleContainer;
    }());
    exports.RectangleContainer = RectangleContainer;
});
