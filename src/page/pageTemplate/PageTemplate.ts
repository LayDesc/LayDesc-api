import {Margin} from "../../geometry/generic/Margin";
import {IPageTemplateSettings} from "./IPageTemplateSettings";
import {IPageTemplateData} from "./IPageTemplateData";
import {RectangleContainer} from "../../containers/rectangleContainer/RectangleContainer";
import {IRectangleContainerSettings} from "../../containers/rectangleContainer/IRectangleContainerSettings";
import {Document} from "../../document/Document";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";

export class PageTemplate implements IPageTemplateData {
    public margin: Margin;
    public containers: RectangleContainer[];
    public name: string;

    public get documentParents() {
        return this._documentParents;
    }

    private _documentParents: Document[] = [];

    private static _defaultSettings = {
        containers: [],
    };

    constructor (
        settings: IPageTemplateSettings,
    ) {
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

    generate(): IPageTemplateData {
        const containers: IRectangleContainerData[] = [];
        for(const container of this.containers) {
            containers.push(container.generate());
        }
        return {
            name: this.name,
            containers: containers,
            margin: this.margin.generate(),
        }
    }
}
