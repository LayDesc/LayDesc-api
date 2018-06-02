define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Size = /** @class */ (function () {
        function Size(settings) {
            if (settings === void 0) { settings = {}; }
            this.width = (settings.width === void 0) ? Size._defaultSettings.width : settings.width;
            this.height = (settings.height === void 0) ? Size._defaultSettings.height : settings.height;
            if (settings instanceof Size)
                return settings;
        }
        Size._defaultSettings = {
            width: 10,
            height: 10,
        };
        return Size;
    }());
    exports.Size = Size;
});
