import { IImageSettings } from "./IImageSettings";
import { IImageData } from "./IImageData";
import { Rectangle } from "../../geometry/generic/Rectangle";
export declare class Image extends Rectangle implements IImageData {
    url: string;
    constructor(settings: IImageSettings);
}
