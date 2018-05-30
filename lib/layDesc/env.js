define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var env;
    (function (env) {
        env.DEBUG = false;
        var _DEBUG = true;
        function helloMessage() {
            var styles = [
                'color: blue',
            ].join(';');
            console.log("%c*****************\n     LayDesc\n*****************", styles);
        }
        env.helloMessage = helloMessage;
    })(env = exports.env || (exports.env = {}));
});
