import { Horizontal } from "./Horizontal";
import { Vertical } from "./Vertical";
export interface IGuideParameters {
    show: boolean;
    horizontal?: Horizontal[];
    vertical?: Vertical[];
}
