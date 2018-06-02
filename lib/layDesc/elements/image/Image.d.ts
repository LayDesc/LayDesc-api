import { IImageSettings } from "./IImageSettings";
import { IImageData } from "./IImageData";
import { Generic } from "../../geometry/generic/Generic";
export declare class Image extends Generic implements IImageData {
    url: string;
    constructor(settings: IImageSettings);
}
