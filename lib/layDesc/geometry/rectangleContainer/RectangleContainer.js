var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../generic/Margin", "../generic/Rectangle"], function (require, exports, Margin_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RectangleContainer = /** @class */ (function (_super) {
        __extends(RectangleContainer, _super);
        function RectangleContainer(settings) {
            if (settings === void 0) { settings = {}; }
            var _this = _super.call(this, settings) || this;
            _this.margin = new Margin_1.Margin(settings.margin);
            if (settings instanceof RectangleContainer)
                return settings;
            return _this;
        }
        RectangleContainer.prototype.generate = function () {
            return {
                unit: this.unit,
                size: this.size.generate(),
                position: this.position.generate(),
                anchor: this.anchor,
                margin: this.margin.generate(),
            };
        };
        return RectangleContainer;
    }(Rectangle_1.Rectangle));
    exports.RectangleContainer = RectangleContainer;
});
