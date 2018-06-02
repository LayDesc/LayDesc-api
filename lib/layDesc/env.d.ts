export declare module env {
    const userAgentIsElectron: () => boolean;
    module parameters {
        let DEBUG: boolean;
        let GENERATE_IN_EXTERNAL_WINDOW: boolean;
    }
    const _DEBUG: boolean;
    function _helloMessage(): void;
}
