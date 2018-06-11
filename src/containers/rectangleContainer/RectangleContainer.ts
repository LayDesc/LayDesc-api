import {IRectangleContainerSettings} from "./IRectangleContainerSettings";
import {IRectangleContainerData} from "./IRectangleContainerData";
import {Margin} from "../../geometry/generic/Margin";
import {Rectangle} from "../../geometry/Rectangle";
import {Text} from "../../elements/text/Text";
import {IContainerData} from "../generic/IContainerData";

export class RectangleContainer extends Rectangle implements IContainerData, IRectangleContainerData {
    margin: Margin;
    texts: Text[];

    constructor(settings: IRectangleContainerSettings) {
        super(settings);
        this.margin = new Margin(settings.margin);

        this.texts = [];
        for(const text of settings.texts) {
            this.texts.push( new Text(text) );
        }

        // @todo Which object should be returned ?
        if ((settings as RectangleContainer) instanceof RectangleContainer) return (settings as RectangleContainer);
    }

    generate(): IRectangleContainerData {
        return {
            unit: this.unit,
            size: this.size.generate(),
            position: this.position.generate(),
            anchor: this.anchor,
            margin: this.margin.generate(),
            texts: this.texts,
        }
    }
}