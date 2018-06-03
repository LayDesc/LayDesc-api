define(["require", "exports", "./Position", "./Size", "./Unit", "./Anchor"], function (require, exports, Position_1, Size_1, Unit_1, Anchor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Rectangle = /** @class */ (function () {
        function Rectangle(settings) {
            if (settings === void 0) { settings = {}; }
            this.anchor = (settings.anchor === void 0) ? Rectangle._defaultSettings.anchor : settings.anchor;
            this.position = new Position_1.Position(settings.position);
            this.size = new Size_1.Size(settings.size);
            this.unit = (settings.unit === void 0) ? Rectangle._defaultSettings.unit : settings.unit;
        }
        Rectangle._defaultSettings = {
            unit: Unit_1.Unit.MM,
            anchor: Anchor_1.Anchor.TOP_LEFT,
        };
        return Rectangle;
    }());
    exports.Rectangle = Rectangle;
});
