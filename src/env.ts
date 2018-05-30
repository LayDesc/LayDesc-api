export module env {
    export let DEBUG = false;
    const _DEBUG = true;

    export function helloMessage() {
        const styles = [
            'color: blue',
        ].join(';');
        console.log(`%c*****************
     LayDesc
*****************`, styles);
    }
}