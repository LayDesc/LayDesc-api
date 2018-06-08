import {loremIpsum} from "../loremIpsum";
import {IRectangleContainerGeneratorSettings} from "./IRectangleContainerGeneratorSettings";
import {UNIT} from "../../geometry/generic/UNIT";
import {IFontSettings} from "../../elements/font/IFontSettings"
import {IFontData} from "../../elements/font/IFontData"
import {Font} from "../../elements/font/Font";

/**
 * ContainerGenerator allows you to cut long contents according to a width and height. They return an array of content that can be placed in Containers.
 * Thus, if you have a long text, a ContainerGenerator will be able to return the number of containers needed to display to display the entire text.
 * —
 * RectangleContainerGenerator is for RectangleContainer.
 */
export class RectangleContainerGenerator {
    width: number;
    height: number;
    unit: UNIT;
    content: string;

    private readonly textMetric: TextMetric;
    private _lines: string[] = [];

    constructor(settings: IRectangleContainerGeneratorSettings) {
        this.width = settings.width;
        this.height = settings.height;
        this.unit = settings.unit;
        this.content = settings.content;

        this.textMetric = new TextMetric(settings.fontSettings);

        this.generateLinesOfNewContent(settings.content);
    }

    public generateLinesOfNewContent(newContent: string) {
        this.content = newContent;

        const subsectionsInContent = this.content.split(/\n/);

        for (const subsection of subsectionsInContent) {
            const wordsInSubsection = subsection.split(/\s/);

            let line = "";
            let newLine = "";

            for (const word of wordsInSubsection) {
                newLine = (line.length === 0) ? word : line + " " + word;
                if (this.textMetric.getStringPixelWidth(newLine) > this.width) {
                    this._lines.push(line);
                    line = word;
                } else {
                    line = newLine;
                }
            }
            this._lines.push(line);
        }
    }
    /**
     * return all line generated for specified width container
     */
    public getLines() {
        return this._lines;
    }

    /**
     * return rectangle containers generated for specified width and height container
     */
    public getContainers() {
        return ( Math.ceil(this._lines.length * this.textMetric.font.lineHeight / this.height) );
    }
}

export class TextMetric {

    readonly font: Font;

    // private readonly _windowRendering = window.open();

    private readonly _elementSizingGetter = document.createElement("div");

    private readonly _canvas: HTMLCanvasElement = document.createElement("canvas");
    private readonly _context: CanvasRenderingContext2D;

    /**
     * list _pixelValueForUnitSize.size value in PX
     */
    private _pixelValueForUnitSize = {
        value: 1000,
        unitsToPX: {
            [UNIT.PT]: 0,
            [UNIT.MM]: 0,
            [UNIT.CM]: 0,
        },
    };

    constructor(fontSettings: IFontData) {
        this.font = new Font(fontSettings);
        this._context = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._setXHeightElementSizingGetter();
        this._setPixelValueForUnitSize();
    }

    getStringPixelWidth(string: string, fontSettings?: IFontSettings) {
        if (fontSettings !== void 0) {
            this.font.setSettings(fontSettings);
            this._canvas.style.letterSpacing = this.font.letterSpacing + "px";
        }
        // this._setFontParametersToElement(this._canvas, this.font.getData());


        this._context.font = `${this.font.fontSize}${this.font.unit} ${this.font.fontFamily}`;
        return this._context.measureText(string).width;
    }

    getXHeightPixelHeight(fontSettings?: IFontSettings): number {
        if (fontSettings !== void 0) this.font.setSettings(fontSettings);
        const fontData = this.font.getData();
        const keyName = `${fontData.fontFamily}${fontData.fontSize}${fontData.unit}`;

        let XHeightPixelHeight: number;
        if(window.localStorage.getItem(keyName) === null) {
            this._setFontParametersToElement( this._elementSizingGetter, fontData);
            this._elementSizingGetter.style.height = "1ex";
            XHeightPixelHeight = this._elementSizingGetter.getBoundingClientRect().height;
            window.localStorage.setItem( keyName, XHeightPixelHeight.toString());
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
            [UNIT.MM]: this._valueToPX(value, UNIT.CM),
            [UNIT.PT]: this._valueToPX(value, UNIT.CM),
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
