import {Document} from "./Document"

export class DocumentChildren {
    public get documentParents() {
        return this._documentParents;
    }

    private _documentParents: Document[] = [];

    constructor() {}

    public addDocumentParent(documentParent: Document) {
        this._documentParents.push(documentParent);
        return this;
    }
}
