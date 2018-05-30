import { IGuideData } from "../guide/IGuideData";
import { PageTemplate } from "../page/PageTemplate";
export interface IDocumentData {
    guides: IGuideData;
    pageTemplates: PageTemplate[];
}
