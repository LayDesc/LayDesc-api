import {IImageSettings} from "./IImageSettings";
import {IImageData} from "./IImageData";
import {Generic} from "../../geometry/generic/Generic";

export class Image extends Generic implements IImageData {
    url: string;

    constructor(settings: IImageSettings) {
        super(settings);
        this.url = settings.url;
    }
}