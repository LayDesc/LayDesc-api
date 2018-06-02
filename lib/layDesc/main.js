var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./document/_module_export", "./elements/_module_export", "./geometry/_module_export", "./guide/_module_export", "./page/_module_export", "./env"], function (require, exports, document, elements, geometry, guide, page, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document = __importStar(document);
    elements = __importStar(elements);
    geometry = __importStar(geometry);
    guide = __importStar(guide);
    page = __importStar(page);
    exports.document = document;
    exports.elements = elements;
    exports.geometry = geometry;
    exports.guide = guide;
    exports.page = page;
    exports.env = env_1.env;
});
