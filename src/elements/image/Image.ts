import {IImageSettings} from "./IImageSettings";
import {IImageData} from "./IImageData";
import {Rectangle} from "../../geometry/Rectangle";

export class Image extends Rectangle implements IImageData {
    url: string;

    constructor(settings: IImageSettings) {
        super(settings);
        this.url = settings.url;
    }

    generate(): IImageData {
        return {
            anchor: this.anchor,
            position: this.position.generate(),
            size: this.size.generate(),
            unit: this.unit,
            url: this.url,
        }
    }
}