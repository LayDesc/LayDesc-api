import {PageTemplate} from "../pageTemplate/PageTemplate";
import {IPageData} from "./IPageData";
import {IPageSettings} from "./IPageSettings";
import {IRectangleContainerData} from "../../containers/rectangleContainer/IRectangleContainerData";
import {loremIpsum} from "../../tools/loremIpsum";

export class Page extends PageTemplate implements IPageData {
    pageTemplateName?: string;

    constructor(settings: IPageSettings) {
        super(settings);
        if (settings.pageTemplateName !== void 0) this.pageTemplateName = settings.pageTemplateName;
        if ((settings as PageTemplate) instanceof Page ) return (settings as Page);
    }

    autoContent() {

    }

    generate(): IPageData {
        const containers: IRectangleContainerData[] = [];
        for(const container of this.containers) {
            containers.push(container.generate());
        }
        return {
            name: this.name,
            containers: containers,
            margin: this.margin.generate(),
            pageTemplateName: this.pageTemplateName,
        }
    }
}



const page = document.body as HTMLBodyElement;
page.style.width = "21cm";
page.style.border = "solid";
page.style.borderColor = "black";

const canvas = document.createElement("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const text = loremIpsum();

const lineHeight = 40;
const fontSize = 20;
const fontFamily = "Arial";
const unit = "px";

const width = 793;
const height = 1122;

const lineSplit = text.split(/\n/);

const lengthArray = [];
const lineArray = [];

for(const lineSplited of lineSplit) {

    const wordsSplit = lineSplited.split(/\s/);

    let line = "";
    let newLine = "";

    for (let i = 0; i < wordsSplit.length; i++) {
        context.font = `${fontSize}${unit} ${fontFamily}`;
        newLine = (line.length === 0) ? wordsSplit[i] : line + " " + wordsSplit[i];
        const wordLength = context.measureText(wordsSplit[i]).width;
        const newLineLength = context.measureText(newLine).width;
        lengthArray.push(wordLength);
        if (newLineLength > width) {
            lineArray.push(line);
            line = wordsSplit[i];
        } else {
            line = newLine;
        }
    }
    lineArray.push(line);
}

console.log(lengthArray);
console.log(lineArray);
console.log(lineArray.length * lineHeight);

const container = document.createElement("div");
container.style.width = `${width}${unit}`;
container.innerText = text;
container.style.margin = "0";
container.style.position = "absolute";
container.style.top = "0";
container.style.left = "0";
container.style.fontFamily = fontFamily;
container.style.fontSize = `${fontSize}${unit}`;
container.style.lineHeight = `${lineHeight}${unit}`;
document.body.appendChild(container);
