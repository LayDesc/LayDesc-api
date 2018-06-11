import {Padding} from "../../geometry/generic/Padding";
import {IPageTemplateSettings} from "./IPageTemplateSettings";
import {IPageTemplateData} from "./IPageTemplateData";
import {RectangleContainer} from "../../containers/rectangleContainer/RectangleContainer";
import {IRectangleContainerSettings} from "../../containers/rectangleContainer/IRectangleContainerSettings";
import {Document} from "../../document/Document";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {UNIT} from "../../geometry/generic/UNIT";

export class PageTemplate implements IPageTemplateData {
    public name: string;
    public pageMargin: Padding;
    public containers: RectangleContainer[];
    public unit: UNIT;

    public get documentParents() {
        return this._documentParents;
    }

    protected _documentParents: Document[] = [];

    private static _defaultSettings = {
        containers: [],
        unit: UNIT.MM,
    };

    constructor (
        settings: IPageTemplateSettings,
    ) {
        this.name = settings.name;
        this.pageMargin = new Padding(settings.pageMargin);
        this.containers = (settings.containers === void 0) ? PageTemplate._defaultSettings.containers : this.addArrayOfContainers(settings.containers);
        this.unit = (settings.unit === void 0) ? PageTemplate._defaultSettings.unit : settings.unit;

        // @todo Which object should be returned ?
        if ( (settings as PageTemplate) instanceof PageTemplate) return (settings as PageTemplate);
    }

    addArrayOfContainers(containers: IRectangleContainerSettings[]) {
        const newArrayOfContainers: RectangleContainer[] = [];

        for(const container of containers) {
            let newContainerToAdd: RectangleContainer;

            //todo test instanceof
            if ( (container as RectangleContainer) instanceof RectangleContainer) {
                newContainerToAdd = (container as RectangleContainer);
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
            containers: containers,
            pageMargin: this.pageMargin.generate(),
            name: this.name,
            unit: this.unit,
        }
    }
}
