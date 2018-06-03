import {PageTemplate} from "../pageTemplate/PageTemplate";
import {IPageData} from "./IPageData";
import {IPageTemplateData} from "../pageTemplate/IPageTemplateData";
import {IPageSettings} from "./IPageSettings";

export class Page extends PageTemplate implements IPageData {
    pageTemplate?: IPageTemplateData;
    constructor(settings: IPageSettings) {
        if (settings.pageTemplate !== void 0) settings.pageTemplate = new PageTemplate(settings.pageTemplate);
        if ((settings as PageTemplate) instanceof Page ) return (settings as Page);
        super(settings);
    }

    async autoContent() {

    }
}
