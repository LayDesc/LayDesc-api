import {Margin} from "../../elements/margin/Margin";
import {IPageTemplateSettings} from "./IPageTemplateSettings";
import {IPageTemplateData} from "./IPageTemplateData";
import {
    RectangleContainer,
    RectangleContainer_ObjectOrSettings
} from "../../elements/rectangleContainer/RectangleContainer";

export type PageTemplate_ObjectOrSettings = PageTemplate | IPageTemplateSettings;

export class PageTemplate implements IPageTemplateData {
    public margin: Margin;
    public containers: RectangleContainer[];
    public name: string;

    private static _defaultSettings = {
        containers: [],
    };

    constructor (
        settings: IPageTemplateSettings,
    ) {
        this.name = settings.name;
        this.margin = new Margin(settings.margin);
        this.containers = (settings.containers === void 0) ? PageTemplate._defaultSettings.containers : this.addListOfContainers(settings.containers);
    }

    addListOfContainers(containers: RectangleContainer_ObjectOrSettings[]) {
        const newListOfContainers: RectangleContainer[] = [];

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
            newListOfContainers.push(newContainerToAdd);
        }
        return newListOfContainers;
    }
}
