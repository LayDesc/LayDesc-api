import {PageTemplate} from "../pageTemplate/PageTemplate";
import {IPageTemplateSettings} from "../pageTemplate/IPageTemplateSettings";

export class Page extends PageTemplate {
    constructor(settings: IPageTemplateSettings) {
        if ((settings as PageTemplate) instanceof Page ) return (settings as Page);
        super(settings);
    }

    async autoContent() {

    }
}
