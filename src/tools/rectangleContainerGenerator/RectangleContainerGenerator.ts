import {IRectangleContainerGeneratorSettings} from "./IRectangleContainerGeneratorSettings";
import {UNIT} from "../../geometry/generic/UNIT";
import {IFontSettings} from "../../elements/font/IFontSettings"
import {IFontData} from "../../elements/font/IFontData"
import {Font} from "../../elements/font/Font";
import {IContainerData} from "../../containers/generic/IContainerData";
import {ITextSettings, Text} from "../../elements/text/Text";
import {ITextLines} from "../../elements/text/ITextLines";
import {env} from "../../env";

/**
 * ContainerGenerator allows you to cut long contents according to a width and height. They return an array of content that can be placed in Containers.
 * Thus, if you have a long text, a ContainerGenerator will be able to return the number of containers needed to display to display the entire text.
 * —
 * RectangleContainerGenerator is for RectangleContainer.
 */
export class RectangleContainerGenerator implements IContainerData {
    width: number;
    height: number;
    unit: UNIT;
    texts: Text[];

    private readonly _textMetric: TextMetric;
    private _textLinesOfTexts: ITextLines[] = [];

    constructor(settings: IRectangleContainerGeneratorSettings) {
        this.width = settings.width;
        this.height = settings.height;
        this.unit = settings.unit;

        this.texts = [];
        for(const text of settings.texts) {
            this.texts.push( new Text(text) );
        }

        this._textMetric = new TextMetric();

        for(const text of this.texts) {
            this.generateLinesOfText(text);
        }
    }

    public generateLinesOfText(text: Text) {
        const newTextChild = new TextChildOfContainerGenerator(text);

        let newTextLines: ITextLines;

        const cacheOfTextLines = newTextChild.getCacheOfTextLines();
        if(cacheOfTextLines !== false) {
            if(env._DEBUG) {
                console.log("mis en cache : ", cacheOfTextLines);
            }

            newTextLines = cacheOfTextLines;
        } else {
            if(env._DEBUG) {
                console.log("pas de mise en cahe…");
            }

            newTextLines = {
                lines: [],
                style: newTextChild.style.generate(),
            };
            this._textMetric.font.setSettings(newTextChild.style.font);

            const subsectionsInContent = newTextChild.content.split(/\n/);

            for (const subsection of subsectionsInContent) {
                const wordsInSubsection = subsection.split(/\s/);

                const maxWidth = this.width - (newTextLines.style.space.left + newTextLines.style.space.right);

                let line = "";
                let newLine = "";

                for (const word of wordsInSubsection) {
                    newLine = (line.length === 0) ? word : line + " " + word;
                    if (this._textMetric.getStringPixelWidth(newLine) > maxWidth) {
                        newTextLines.lines.push(line);
                        line = word;
                    } else {
                        line = newLine;
                    }
                }
                newTextLines.lines.push(line);
            }

            newTextChild.cacheLinesGenerated(newTextLines);
        }

        this._textLinesOfTexts.push(newTextLines);
    }
    /**
     * return all line generated for specified width container
     */
    public getTextLinesOfTexts() {
        return this._textLinesOfTexts;
    }

    /**
     * return rectangle containers generated for specified width and height container
     */
    public getContainers() {
        return ( Math.ceil(this._textLinesOfTexts.length * this._textMetric.font.lineHeight / this.height) );
    }
}

/**
 * @hidden
 */
class TextChildOfContainerGenerator extends Text {
    private readonly _cacheName: string;
    constructor(settings: ITextSettings) {
        super(settings);
        this._cacheName = JSON.stringify(this.generate());
    }
    cacheLinesGenerated(textLines: ITextLines) {
        try {
            window.localStorage.setItem(this._cacheName, `${JSON.stringify(textLines)}`);
        } catch (e) {
            // @todo optimise cache
            window.localStorage.clear();
            window.localStorage.setItem(this._cacheName, `${JSON.stringify(textLines)}`);
        }
    }
    getCacheOfTextLines() {
        const cacheOfTextLines = window.localStorage.getItem(this._cacheName);
        if( cacheOfTextLines !== null) {
            return JSON.parse(cacheOfTextLines);
        } else {
            return false;
        }
    }
}

export class TextMetric {

    readonly font = new Font();

    // private readonly _windowRendering = window.open();

    private readonly _elementSizingGetter = document.createElement("div");

    private readonly _canvas: HTMLCanvasElement = document.createElement("canvas");
    private readonly _context: CanvasRenderingContext2D;

    /**
     * list _pixelValueForUnitSize.size value in PX
     * @todo save value (don't search size if we have run _pixelValueForUnitSize one time)
     */
    private _pixelValueForUnitSize = {
        value: 1000,
        unitsToPX: {
            [UNIT.PT]: 0,
            [UNIT.MM]: 0,
            [UNIT.CM]: 0,
        },
    };

    constructor() {
        this._context = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._setXHeightElementSizingGetter();
        this._setPixelValueForUnitSize();
    }

    getStringPixelWidth(string: string, fontSettings?: IFontSettings) {
        if (fontSettings !== void 0) {
            this.font.setSettings(fontSettings);
            this._canvas.style.letterSpacing = this.font.letterSpacing + "px";
        }

        this._context.font = `${this.font.fontSize}${this.font.unit} ${this.font.fontFamily}`;
        return this._context.measureText(string).width;
    }

    getXHeightPixelHeight(fontSettings?: IFontSettings): number {
        if (fontSettings !== void 0) this.font.setSettings(fontSettings);
        const fontData = this.font.generate();
        const keyName = `${fontData.fontFamily}${fontData.fontSize}${fontData.unit}`;

        let XHeightPixelHeight: number;
        if(window.localStorage.getItem(keyName) === null) {
            this._setFontParametersToElement( this._elementSizingGetter, fontData);
            this._elementSizingGetter.style.height = "1ex";
            XHeightPixelHeight = this._elementSizingGetter.getBoundingClientRect().height;

            try {
                window.localStorage.setItem( keyName, XHeightPixelHeight.toString());
            } catch (e) {
                // @todo optimise cache
                window.localStorage.clear();
                window.localStorage.setItem( keyName, XHeightPixelHeight.toString());
            }
        } else {
            XHeightPixelHeight = parseFloat((window.localStorage.getItem(keyName) as string) );
        }

        return XHeightPixelHeight;
    }

    private _setXHeightElementSizingGetter() {
        document.body.appendChild(this._elementSizingGetter);
        this._elementSizingGetter.style.margin = "0";
        this._elementSizingGetter.style.padding = "0";
        this._elementSizingGetter.style.border = "none";
        this._elementSizingGetter.style.boxSizing = "border-box";
    }

    private _setPixelValueForUnitSize() {
        const value = this._pixelValueForUnitSize.value;
        this._pixelValueForUnitSize.unitsToPX = {
            [UNIT.CM]: this._valueToPX(value, UNIT.CM),
            [UNIT.MM]: this._valueToPX(value, UNIT.MM),
            [UNIT.PT]: this._valueToPX(value, UNIT.PT),
        }
    }

    private _valueToPX(value: number, unit: UNIT) {
        this._elementSizingGetter.style.height = `${value}${unit}`;
        this._elementSizingGetter.style.display = "block";
        const valueToReturn = this._elementSizingGetter.getBoundingClientRect().height;
        this._elementSizingGetter.style.display = "none";
        return valueToReturn;
    };

    private _setFontParametersToElement(element: HTMLElement, fontData: IFontData) {
        this._elementSizingGetter.style.letterSpacing = `${fontData.letterSpacing}${fontData.unit}`;
        this._elementSizingGetter.style.fontFamily    = fontData.fontFamily;
        this._elementSizingGetter.style.lineHeight    = `${fontData.lineHeight}${fontData.unit}`;
        this._elementSizingGetter.style.fontSize      = `${fontData.fontSize}${fontData.unit}`;
        return fontData;
    }
}

// const page = document.body as HTMLBodyElement;
// page.style.width = "21cm";
// page.style.border = "solid";
// page.style.borderColor = "black";

// const canvas = document.createElement("canvas") as HTMLCanvasElement;
// const context = canvas.getContext("2d") as CanvasRenderingContext2D;

// let text = loremIpsum().replace(/-/gm, "–");

// const lineHeight = 70;
// const fontSize = 60;
// const fontFamily = "Sangbleu Kingdom";
// const unit = "px";
//
// const width = 793;
// const height = 1122;
//
// const lineSplit = text.split(/\n/);
//
// const lengthArray = [];
// const lineArray = [];
//
// for(const lineSplited of lineSplit) {
//
//     const wordsSplit = lineSplited.split(/\s/);
//
//     let line = "";
//     let newLine = "";
//
//     for (let i = 0; i < wordsSplit.length; i++) {
//         context.font = `${fontSize}${unit} ${fontFamily}`;
//         newLine = (line.length === 0) ? wordsSplit[i] : line + " " + wordsSplit[i];
//         const wordLength = context.measureText(wordsSplit[i]).width;
//         const newLineLength = context.measureText(newLine).width;
//         lengthArray.push(wordLength);
//         if (newLineLength > width) {
//             lineArray.push(line);
//             line = wordsSplit[i];
//         } else {
//             line = newLine;
//         }
//     }
//     lineArray.push(line);
// }
//
// console.log(lengthArray);
// console.log(lineArray);
// console.log(lineArray.length * lineHeight);
//
// const container = document.createElement("div");
// container.style.width = `${width}${unit}`;


// @todo put this code in html generator
// text = text.replace(/–/gm, "&#x2011;");
// text = text.replace(/\n/gm, "<br>");
//
// container.innerHTML = text;
// container.style.margin = "0";
// container.style.position = "absolute";
// container.style.top = "0";
// container.style.left = "0";
// container.style.fontFamily = fontFamily;
// container.style.fontSize = `${fontSize}${unit}`;
// container.style.lineHeight = `${lineHeight}${unit}`;
// document.body.appendChild(container);
