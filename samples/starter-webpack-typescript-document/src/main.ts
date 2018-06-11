import * as layDesc from "../../../src/main";
import {Page} from "../../../src/page/page/Page";
import {PageTemplate} from "../../../src/page/pageTemplate/PageTemplate";
import {RectangleContainerGenerator} from "../../../src/tools/rectangleContainerGenerator/RectangleContainerGenerator";
import {UNIT} from "../../../src/geometry/generic/UNIT";
import {loremIpsum} from "../../../src/tools/loremIpsum";
import {Text} from "../../../src/elements/text/Text";
import {Image} from "../../../src/elements/image/Image";
import {ITextLines} from "../../../src/elements/text/ITextLines";
import {ITextStyleData} from "../../../src/elements/text/TextStyle";

const logo = require("./LayDesc_icon-600.png");

layDesc.env.parameters.DEBUG = true;

const newPageTest = new Page({
    name: "newPageTest"
});

const doc = new layDesc.document.Document({
    guides: {
        show: true,
        horizontal: [
            new layDesc.guide.Horizontal(10),
        ]
    },
    pageTemplates: [
        {
            name: "left",
            pageMargin:{},
        },
        new PageTemplate({
            name: "right",
        }),
    ],
    arrayOfPage: [
        newPageTest,
        {
            name: "hello"
        }
    ]
});

newPageTest.name = "change";

console.log("...", newPageTest, doc, "...");

const anOtherDoc = new layDesc.document.Document();

const image = new layDesc.elements.Image({
    url: logo,
});

const img = document.createElement("img");
img.src = image.url;
img.style.top = image.position.y + image.unit;
img.style.left = image.position.x + image.unit;
img.style.width = image.size.width + image.unit;
img.style.width = image.size.height + image.unit;

document.body.appendChild(img);

console.log(image);

const page = new Page({name:""});
// page.addDocumentParent(doc); <-- must be breaking


/*
 * async render test
 */
async function docBuildAsyncTest() {
    const test = await doc.generate();
    console.log("…render ended :", test);
}
docBuildAsyncTest();
console.log("render init…");


/*
 * delay test
*/
function delay() {
    return new Promise((resolve: any) => {
        setTimeout(resolve, 300);
    });
}

async function delayedLog(value: any) {
    // remarquez que nous pouvons attendre une fonction qui renvoie la promesse
    await delay();

    // enregistrer l'élément seulement après un délai
    console.log(value);
}

async function processArray(array: any[]) {
    for(const value in array) {
        await delayedLog(value);
    }
    console.log("done !");
}

processArray([1, 2, 3]).then(() => {console.log("async processArray ended")});
console.log("done");

document.addEventListener("click", () => {
    generateDocument().then((value) => {
        console.log(value.message, value.value);
    });
    console.log("doc creation started…");
});

/*
width: 21cm;
height: 29.7cm;
border: solid;
box-sizing: content-box;
* */


function generateDocument(): Promise<{message: string, value: Object}> {
    return new Promise((resolve) => {
        let initTime = new Date().getTime();
        while (document.body.hasChildNodes()) {
            document.body.removeChild((document.body.firstChild as HTMLElement));
        }

        document.body.innerHTML = "body clean : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        const autoContent = new RectangleContainerGenerator({
            texts: [
                {
                    content: "title",
                    style: {
                        font: {
                            fontFamily: "monospace",
                        }
                    }
                },
                {
                    content: loremIpsum() + loremIpsum() + loremIpsum(),
                    style: {
                        font: {
                            fontFamily: "Arial",
                        }
                    }
                }
            ],
            //@todo incorrect unit value: (PX ?)
            unit: UNIT.CM,
            height: 1122.515625,
            width: 793.69,
        });

        document.body.innerHTML += "doc created : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        // console.log(autoContent.getTextLinesOfTexts());
        // console.log(autoContent.getContainers());

        const textLinesOfTexts = autoContent.getTextLinesOfTexts();

        const arrayOfContainers: HTMLDivElement[] = [];

        let totalLineHeight = 0;
        let containerElement: HTMLDivElement | null = null;
        let textContainer: HTMLDivElement | null = null;
        let new_container_MustBeCreated = true;

        for(const textLines of textLinesOfTexts) {
            textContainer = createNewTextContainerElement(textLines.style);

            for(const line of textLines.lines) {
                // @todo unit converter --> currently all is in UNIT.PX
                totalLineHeight += textLines.style.font.lineHeight;

                if(totalLineHeight > 1122.515625) {
                    new_container_MustBeCreated = true;
                    totalLineHeight = textLines.style.font.lineHeight;
                }

                if(new_container_MustBeCreated) {
                    new_container_MustBeCreated = false;
                    containerElement = createNewContainerElement();
                    textContainer = createNewTextContainerElement(textLines.style);
                    arrayOfContainers.push(containerElement);
                }

                const newLineElement = document.createElement("div");
                newLineElement.innerHTML = line;

                (textContainer as HTMLDivElement).appendChild(newLineElement);
                (containerElement as HTMLDivElement).appendChild(textContainer);
            }

            (containerElement as HTMLDivElement).appendChild((textContainer as HTMLDivElement));
        }
        arrayOfContainers.push( (containerElement as HTMLDivElement) );

        document.body.innerHTML += "body created : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        for(const containerElement of arrayOfContainers) {
            document.body.appendChild(containerElement as HTMLDivElement);
        }

        document.body.style.color = (document.body.style.color === "red") ? "blue": "red";
        resolve({
            message: "…document generated",
            value: textLinesOfTexts,
        });
    });

    function createNewContainerElement() {
        const newContainerElement = document.createElement("div");

        newContainerElement.className = "container";
        newContainerElement.style.overflow = "hidden";

        newContainerElement.style.width = "793.69px";
        newContainerElement.style.height = "1122.515625px";
        newContainerElement.style.boxSizing = "content-box";
        newContainerElement.style.border = "solid 4px";


        return newContainerElement;
    }

    function createNewTextContainerElement(textLinesStyle: ITextStyleData) {
        const newTextContainerElement = document.createElement("div");

        newTextContainerElement.className = "text-container";
        newTextContainerElement.style.overflow = "hidden";

        newTextContainerElement.style.marginTop = textLinesStyle.space.top + "px";
        newTextContainerElement.style.marginRight = textLinesStyle.space.right + "px";
        newTextContainerElement.style.marginBottom = textLinesStyle.space.bottom + "px";
        newTextContainerElement.style.marginLeft = textLinesStyle.space.left + "px";

        newTextContainerElement.style.fontFamily = textLinesStyle.font.fontFamily;
        newTextContainerElement.style.fontSize = textLinesStyle.font.fontSize + "px";
        newTextContainerElement.style.lineHeight = textLinesStyle.font.lineHeight + "px";
        newTextContainerElement.style.letterSpacing = textLinesStyle.font.letterSpacing + "px";

        return newTextContainerElement;
    }
}