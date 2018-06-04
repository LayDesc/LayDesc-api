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
define(["require", "exports", "../pageTemplate/PageTemplate", "../../tools/loremIpsum"], function (require, exports, PageTemplate_1, loremIpsum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function (_super) {
        __extends(Page, _super);
        function Page(settings) {
            var _this = _super.call(this, settings) || this;
            if (settings.pageTemplateName !== void 0)
                _this.pageTemplateName = settings.pageTemplateName;
            if (settings instanceof Page)
                return settings;
            return _this;
        }
        Page.prototype.autoContent = function () {
        };
        Page.prototype.generate = function () {
            var containers = [];
            for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
                var container_1 = _a[_i];
                containers.push(container_1.generate());
            }
            return {
                name: this.name,
                containers: containers,
                margin: this.margin.generate(),
                pageTemplateName: this.pageTemplateName,
            };
        };
        return Page;
    }(PageTemplate_1.PageTemplate));
    exports.Page = Page;
    var page = document.body;
    page.style.width = "21cm";
    page.style.border = "solid";
    page.style.borderColor = "black";
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var text = loremIpsum_1.loremIpsum();
    var lineHeight = 40;
    var fontSize = 20;
    var fontFamily = "Arial";
    var unit = "px";
    var width = 793;
    var height = 1122;
    var lineSplit = text.split(/\n/);
    var lengthArray = [];
    var lineArray = [];
    for (var _i = 0, lineSplit_1 = lineSplit; _i < lineSplit_1.length; _i++) {
        var lineSplited = lineSplit_1[_i];
        var wordsSplit = lineSplited.split(/\s/);
        var line = "";
        var newLine = "";
        for (var i = 0; i < wordsSplit.length; i++) {
            context.font = "" + fontSize + unit + " " + fontFamily;
            newLine = (line.length === 0) ? wordsSplit[i] : line + " " + wordsSplit[i];
            var wordLength = context.measureText(wordsSplit[i]).width;
            var newLineLength = context.measureText(newLine).width;
            lengthArray.push(wordLength);
            if (newLineLength > width) {
                lineArray.push(line);
                line = wordsSplit[i];
            }
            else {
                line = newLine;
            }
        }
        lineArray.push(line);
    }
    console.log(lengthArray);
    console.log(lineArray);
    console.log(lineArray.length * lineHeight);
    var container = document.createElement("div");
    container.style.width = "" + width + unit;
    container.innerText = text;
    container.style.margin = "0";
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    container.style.fontFamily = fontFamily;
    container.style.fontSize = "" + fontSize + unit;
    container.style.lineHeight = "" + lineHeight + unit;
    document.body.appendChild(container);
});
