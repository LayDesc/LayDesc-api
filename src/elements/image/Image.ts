import {IImageSettings} from "./IImageSettings";
import {IImageData} from "./IImageData";
import {Rectangle} from "../../geometry/generic/Rectangle";

export class Image extends Rectangle implements IImageData {
    url: string;

    constructor(settings: IImageSettings) {
        super(settings);
        this.url = settings.url;
    }
}