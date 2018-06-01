define(["require", "exports", "../../elements/margin/Margin", "../../elements/rectangleContainer/RectangleContainer"], function (require, exports, Margin_1, RectangleContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageTemplate = /** @class */ (function () {
        function PageTemplate(settings) {
            this.name = settings.name;
            this.margin = new Margin_1.Margin(settings.margin);
            this.containers = (settings.containers === void 0) ? PageTemplate._defaultSettings.containers : this.addListOfContainers(settings.containers);
        }
        PageTemplate.prototype.addListOfContainers = function (containers) {
            var newListOfContainers = [];
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
                newListOfContainers.push(newContainerToAdd);
            }
            return newListOfContainers;
        };
        PageTemplate._defaultSettings = {
            containers: [],
        };
        return PageTemplate;
    }());
    exports.PageTemplate = PageTemplate;
});
