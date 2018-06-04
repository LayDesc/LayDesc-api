define(["require", "exports", "./Position", "./Size", "./UNIT", "./ANCHOR"], function (require, exports, Position_1, Size_1, UNIT_1, ANCHOR_1) {
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
        Rectangle.prototype.generate = function () {
            return {
                anchor: this.anchor,
                position: this.position.generate(),
                size: this.size.generate(),
                unit: this.unit,
            };
        };
        Rectangle._defaultSettings = {
            unit: UNIT_1.UNIT.MM,
            anchor: ANCHOR_1.ANCHOR.TOP_LEFT,
        };
        return Rectangle;
    }());
    exports.Rectangle = Rectangle;
});
