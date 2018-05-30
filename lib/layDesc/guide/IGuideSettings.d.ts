import { Horizontal } from "./Horizontal";
import { Vertical } from "./Vertical";
export interface IGuideSettings {
    show: boolean;
    horizontal?: Horizontal[];
    vertical?: Vertical[];
}
