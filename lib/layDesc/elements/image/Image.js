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
define(["require", "exports", "../../geometry/generic/Rectangle"], function (require, exports, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(settings) {
            var _this = _super.call(this, settings) || this;
            _this.url = settings.url;
            return _this;
        }
        return Image;
    }(Rectangle_1.Rectangle));
    exports.Image = Image;
});
