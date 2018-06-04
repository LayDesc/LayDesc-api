define(["require", "exports", "../../geometry/generic/Margin", "../../geometry/rectangleContainer/RectangleContainer"], function (require, exports, Margin_1, RectangleContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTemplate = /** @class */ (function () {
        function PageTemplate(settings) {
            this._documentParents = [];
            this.name = settings.name;
            this.margin = new Margin_1.Margin(settings.margin);
            this.containers = (settings.containers === void 0) ? PageTemplate._defaultSettings.containers : this.addArrayOfContainers(settings.containers);
            if (settings instanceof PageTemplate)
                return settings;
        }
        Object.defineProperty(PageTemplate.prototype, "documentParents", {
            get: function () {
                return this._documentParents;
            },
            enumerable: true,
            configurable: true
        });
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
        PageTemplate.prototype.generate = function () {
            var containers = [];
            for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
                var container = _a[_i];
                containers.push(container.generate());
            }
            return {
                name: this.name,
                containers: containers,
                margin: this.margin.generate(),
            };
        };
        PageTemplate._defaultSettings = {
            containers: [],
        };
        return PageTemplate;
    }());
    exports.PageTemplate = PageTemplate;
});
