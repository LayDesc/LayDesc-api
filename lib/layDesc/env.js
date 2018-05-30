define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var env;
    (function (env) {
        env.userAgentIsElectron = function () {
            return navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;
        };
        var parameters;
        (function (parameters) {
            parameters.DEBUG = false;
            parameters.GENERATE_IN_EXTERNAL_WINDOW = true;
        })(parameters = env.parameters || (env.parameters = {}));
        var _private;
        (function (_private) {
            _private._DEBUG = true;
            function _helloMessage() {
                var styles = [
                    'color: blue',
                ].join(';');
                console.log("%c*****************\n     LayDesc\n*****************", styles);
            }
            _private._helloMessage = _helloMessage;
        })(_private = env._private || (env._private = {}));
    })(env = exports.env || (exports.env = {}));
});
