export module env {
    export const userAgentIsElectron = () => {
        return navigator.userAgent.toLowerCase().indexOf(' electron/') > -1
    };

    export module parameters {
        export let DEBUG = false;
        export let GENERATE_IN_EXTERNAL_WINDOW = true;
    }

    export module _private {
        export const _DEBUG = true;
        export function _helloMessage() {
            const styles = [
                'color: blue',
            ].join(';');
            console.log(`%c*****************
     LayDesc
*****************`, styles);
        }
    }
}