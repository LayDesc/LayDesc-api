import { Document } from "./Document";
export declare class DocumentChildren {
    readonly documentParents: Document[];
    private _documentParents;
    constructor();
    addDocumentParent(documentParent: Document): this;
}
