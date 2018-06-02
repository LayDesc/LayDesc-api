define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocumentChildren = /** @class */ (function () {
        function DocumentChildren() {
            this._documentParents = [];
        }
        Object.defineProperty(DocumentChildren.prototype, "documentParents", {
            get: function () {
                return this._documentParents;
            },
            enumerable: true,
            configurable: true
        });
        DocumentChildren.prototype.addDocumentParent = function (documentParent) {
            this._documentParents.push(documentParent);
            return this;
        };
        return DocumentChildren;
    }());
    exports.DocumentChildren = DocumentChildren;
});
