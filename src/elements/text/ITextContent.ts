import {Image} from "../image/Image";

export interface ITextContent {
    content: (string | Image)[];
}

/**
 * ITextContentTyped defines an ITextContent object that has a hierachized structure (like Markdow or HTML).
 * In addition to the content, ITextContentTyped contains the hierachy information of each line (which ends with a return end of paragraph "\ n") in a text.
 */
export interface ITextContentTyped extends ITextContent {
    typeName: string;
}
