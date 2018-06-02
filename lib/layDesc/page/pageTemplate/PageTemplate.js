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
define(["require", "exports", "../../geometry/generic/Margin", "../../geometry/rectangleContainer/RectangleContainer", "../../document/DocumentChildren"], function (require, exports, Margin_1, RectangleContainer_1, DocumentChildren_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTemplate = /** @class */ (function (_super) {
        __extends(PageTemplate, _super);
        function PageTemplate(settings) {
            var _this = _super.call(this) || this;
            _this.name = settings.name;
            _this.margin = new Margin_1.Margin(settings.margin);
            _this.containers = (settings.containers === void 0) ? PageTemplate._defaultSettings.containers : _this.addArrayOfContainers(settings.containers);
            if (settings instanceof PageTemplate)
                return settings;
            return _this;
        }
        PageTemplate.prototype.addArrayOfContainers = function (containers) {
            var newArrayOfContainers = [];
            for (var _i = 0, containers_1 = containers; _i < containers_1.length; _i++) {
                var container = containers_1[_i];
                var newContainerToAdd = void 0;
                //todo test instanceof
                if (container instanceof RectangleContainer_1.RectangleContainer) {
                    newContainerToAdd = container;
                    this.containers.push(newContainerToAdd);
                }
                else {
                    newContainerToAdd = new RectangleContainer_1.RectangleContainer(container);
                    this.containers.push(newContainerToAdd);
                }
                newArrayOfContainers.push(newContainerToAdd);
            }
            return newArrayOfContainers;
        };
        PageTemplate._defaultSettings = {
            containers: [],
        };
        return PageTemplate;
    }(DocumentChildren_1.DocumentChildren));
    exports.PageTemplate = PageTemplate;
});
