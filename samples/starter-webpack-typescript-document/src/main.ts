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


let increment = 1;
document.addEventListener("click", () => {
    generateDocument(increment).then((value) => {
        console.log(value.message, value.value);
        requestAnimationFrame(() => {
            animationTest(increment);
        });
    });
    increment++;
    console.log("doc creation started…");
});

function animationTest(sizeAugmentation: number) {
    sizeAugmentation++;
    generateDocument(sizeAugmentation).then(() => {
        requestAnimationFrame(() => {
            animationTest(sizeAugmentation);
        });
    });
}

/*
width: 21cm;
height: 29.7cm;
border: solid;
box-sizing: content-box;
* */


function generateDocument(variable = 1): Promise<{message: string, value: Object}> {
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
                            fontSize: 50 * variable * 0.1,
                            lineHeight: 60 * variable * 0.1,
                        },
                        unit: UNIT.PX,
                    }
                },
                {
                    content: loremIpsum() + loremIpsum() + loremIpsum(),
                    style: {
                        font: {
                            fontFamily: "Arial",
                            fontSize: 50 * variable * 0.1,
                            lineHeight: 60 * variable * 0.1,
                        },
                        unit: UNIT.PX,
                    }
                }
            ],
            unit: UNIT.PX,
            height: 1122.515625,
            width: 793.69,
        });

        document.body.innerHTML += "doc created : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        const textLinesOfTexts = autoContent.getTextLinesOfTexts();

        const arrayOfContainers: HTMLDivElement[] = [];

        let totalLineHeight = 0;
        let textLinesSpaceBefore = 0;
        let textLinesSpaceAfter = 0;
        let ContainerHasNoFirstChild = true;
        let containerElement: HTMLDivElement | null = null;
        let textContainer: HTMLDivElement | null = null;
        let new_container_MustBeCreated = true;

        for(const textLines of textLinesOfTexts) {
            textContainer = createNewTextContainerElement(textLines.style);
            if(ContainerHasNoFirstChild) {
                //remove space for textContainer first child of containerElement
                textContainer.style.paddingTop = "0";
                textLinesSpaceAfter += textLines.style.space.bottom;
            } else {
                textLinesSpaceBefore += textLines.style.space.top;
                textLinesSpaceAfter += textLines.style.space.bottom;
            }

            for(const line of textLines.lines) {
                // @todo unit converter --> currently all is in UNIT.PX
                totalLineHeight += textLines.style.font.lineHeight;

                const maxHeight = autoContent.height - (textLinesSpaceBefore + textLinesSpaceAfter);

                if(totalLineHeight > maxHeight) {
                    new_container_MustBeCreated = true;
                    totalLineHeight = textLines.style.font.lineHeight;
                }

                if(new_container_MustBeCreated) {
                    new_container_MustBeCreated = false;

                    containerElement = createNewContainerElement(autoContent);
                    ContainerHasNoFirstChild = true;

                    textContainer = createNewTextContainerElement(textLines.style);
                    textContainer.style.paddingTop = "0"; //remove space for textContainer first child of containerElement
                    textLinesSpaceBefore = 0;
                    textLinesSpaceAfter = textLines.style.space.bottom;

                    arrayOfContainers.push(containerElement);
                }

                const newLineElement = document.createElement("div");
                newLineElement.style.height = `${textLines.style.font.lineHeight}${textLines.style.unit}`;
                newLineElement.innerHTML = line;

                (textContainer as HTMLDivElement).appendChild(newLineElement);
                (containerElement as HTMLDivElement).appendChild(textContainer);
                ContainerHasNoFirstChild = false;
            }

            (containerElement as HTMLDivElement).appendChild((textContainer as HTMLDivElement));
            ContainerHasNoFirstChild = false;
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

    function createNewContainerElement(autoContent: RectangleContainerGenerator) {
        const newContainerElement = document.createElement("div");

        newContainerElement.className = "container";
        newContainerElement.style.overflow = "hidden";

        newContainerElement.style.width =  `${autoContent.width}${autoContent.unit}`;
        newContainerElement.style.height = `${autoContent.height}${autoContent.unit}`;

        newContainerElement.style.boxSizing = "content-box";
        newContainerElement.style.border = "solid 4px";


        return newContainerElement;
    }

    function createNewTextContainerElement(textLinesStyle: ITextStyleData) {
        const newTextContainerElement = document.createElement("div");

        newTextContainerElement.className = "text-container";
        newTextContainerElement.style.overflow = "hidden";

        newTextContainerElement.style.paddingTop = `${textLinesStyle.space.top}${textLinesStyle.unit}`;
        newTextContainerElement.style.paddingRight = `${textLinesStyle.space.right}${textLinesStyle.unit}`;
        newTextContainerElement.style.paddingBottom = `${textLinesStyle.space.bottom}${textLinesStyle.unit}`;
        newTextContainerElement.style.paddingLeft = `${textLinesStyle.space.left}${textLinesStyle.unit}`;

        newTextContainerElement.style.fontFamily = textLinesStyle.font.fontFamily;
        newTextContainerElement.style.fontSize = `${textLinesStyle.font.fontSize}${textLinesStyle.unit}`;
        newTextContainerElement.style.lineHeight = `${textLinesStyle.font.lineHeight}${textLinesStyle.unit}`;
        newTextContainerElement.style.letterSpacing = `${textLinesStyle.font.letterSpacing}${textLinesStyle.unit}`;

        return newTextContainerElement;
    }
}