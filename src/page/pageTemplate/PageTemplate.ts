import {Margin} from "../../geometry/generic/Margin";
import {IPageTemplateSettings} from "./IPageTemplateSettings";
import {IPageTemplateData} from "./IPageTemplateData";
import {RectangleContainer} from "../../geometry/rectangleContainer/RectangleContainer";
import {DocumentChildren} from "../../document/DocumentChildren";
import {IRectangleContainerSettings} from "../../geometry/rectangleContainer/IRectangleContainerSettings";

export class PageTemplate extends DocumentChildren implements IPageTemplateData {
    public margin: Margin;
    public containers: RectangleContainer[];
    public name: string;

    private static _defaultSettings = {
        containers: [],
    };

    constructor (
        settings: IPageTemplateSettings,
    ) {
        super();
        this.name = settings.name;
        this.margin = new Margin(settings.margin);
        this.containers = (settings.containers === void 0) ? PageTemplate._defaultSettings.containers : this.addArrayOfContainers(settings.containers);

        if ( (settings as PageTemplate) instanceof PageTemplate) return (settings as PageTemplate);
    }

    addArrayOfContainers(containers: IRectangleContainerSettings[]) {
        const newArrayOfContainers: RectangleContainer[] = [];

        for(const container of containers) {
            let newContainerToAdd: RectangleContainer;
            //todo test instanceof
            if (container instanceof RectangleContainer) {
                newContainerToAdd = container;
                this.containers.push(newContainerToAdd);
            } else {
                newContainerToAdd = new RectangleContainer(container);
                this.containers.push(newContainerToAdd);
            }
            newArrayOfContainers.push(newContainerToAdd);
        }
        return newArrayOfContainers;
    }
}