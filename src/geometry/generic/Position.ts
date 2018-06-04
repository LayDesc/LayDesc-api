export class Position implements IPositionData {
    x: number;
    y: number;

    private static _defaultSettings = {
        x: 0,
        y: 0,
    };

    constructor(settings: IPositionSettings = {}) {
        this.x = (settings.x === void 0) ? Position._defaultSettings.x : settings.x;
        this.y = (settings.y === void 0) ? Position._defaultSettings.y : settings.y;
    }

    generate(): IPositionData {
        return {
            x: this.x,
            y: this.y,
        }
    }
}

export interface IPositionSettings {
    x?: number;
    y?: number;
}

export interface IPositionData {
    x: number;
    y: number;
}