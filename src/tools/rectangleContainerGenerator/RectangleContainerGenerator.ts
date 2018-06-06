import {loremIpsum} from "../loremIpsum";

/**
 * ContainerGenerator allows you to cut long contents according to a width and height. They return an array of content that can be placed in Containers.
 * Thus, if you have a long text, a ContainerGenerator will be able to return the number of containers needed to display to display the entire text.
 * —
 * RectangleContainerGenerator is adabter for RectangleContainer.
 */
export class RectangleContainerGenerator {
    constructor() {

    }
}


const page = document.body as HTMLBodyElement;
page.style.width = "21cm";
page.style.border = "solid";
page.style.borderColor = "black";

const canvas = document.createElement("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

let text = loremIpsum().replace(/-/gm, "–");

const lineHeight = 70;
const fontSize = 60;
const fontFamily = "Sangbleu Kingdom";
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

text = text.replace(/–/gm, "&#x2011;");
text = text.replace(/\n/gm, "<br>");

container.innerHTML = text;
container.style.margin = "0";
container.style.position = "absolute";
container.style.top = "0";
container.style.left = "0";
container.style.fontFamily = fontFamily;
container.style.fontSize = `${fontSize}${unit}`;
container.style.lineHeight = `${lineHeight}${unit}`;
document.body.appendChild(container);
