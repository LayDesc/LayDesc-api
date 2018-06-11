import {ITextStyleData, ITextStyleSettings, TextStyle} from "./TextStyle";

/**
 * Text object type are equivalent to Paragraph in InDesign
 * @todo Text or Paragraph type name
 */
export class Text implements ITextData {
    content: string;
    style: TextStyle;

    constructor(settings: ITextSettings) {
        this.content = settings.content;
        this.style = new TextStyle(settings.style);
    }

    generate(): ITextData {
        return {
            content: this.content,
            style: this.style.generate(),
        }
    }
}

export interface ITextSettings {
    content: string;

    // @todo implement textStyle at Document level
    style?: ITextStyleSettings;
}

export interface ITextData {
    content: string;
    style: ITextStyleData;
}
