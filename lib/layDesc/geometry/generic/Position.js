define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Position = /** @class */ (function () {
        function Position(settings) {
            if (settings === void 0) { settings = {}; }
            this.x = (settings.x === void 0) ? Position._defaultSettings.x : settings.x;
            this.y = (settings.y === void 0) ? Position._defaultSettings.y : settings.y;
        }
        Position.prototype.generate = function () {
            return {
                x: this.x,
                y: this.y,
            };
        };
        Position._defaultSettings = {
            x: 0,
            y: 0,
        };
        return Position;
    }());
    exports.Position = Position;
});
