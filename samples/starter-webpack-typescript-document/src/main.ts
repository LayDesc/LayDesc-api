import * as layDesc from "../../../src/main";
import {Page} from "../../../src/page/page/Page";
import {PageTemplate} from "../../../src/page/pageTemplate/PageTemplate";
import {RectangleContainerGenerator} from "../../../src/tools/rectangleContainerGenerator/RectangleContainerGenerator";
import {UNIT} from "../../../src/geometry/generic/UNIT";
import {loremIpsum} from "../../../src/tools/loremIpsum";

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
            margin:{},
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
        console.log(value);
    });
    console.log("doc creation started…");
});

/*
width: 21cm;
height: 29.7cm;
border: solid;
box-sizing: content-box;
* */


function generateDocument() {
    return new Promise((resolve) => {
        let initTime = new Date().getTime();
        while (document.body.hasChildNodes()) {
            document.body.removeChild((document.body.firstChild as HTMLElement));
        }

        document.body.innerHTML = "body clean : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        const autoContent = new RectangleContainerGenerator({
            content: loremIpsum() + loremIpsum() + loremIpsum(),
            unit: UNIT.CM,
            height: 1122.515625,
            width: 793.69,
            fontSettings: {
                lineHeight: 20,
                fontSize: 20,
                fontFamily: "Sangbleu Kingdom",
                letterSpacing: 0,
                unit: UNIT.PX,
            }
        });

        document.body.innerHTML += "doc created : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        // console.log(autoContent.getLines());
        // console.log(autoContent.getContainers());

        const lines = autoContent.getLines();

        let lineNumber = 0;
        let pageTest = document.createElement("div");
        let newPage = true;
        for(const line of lines) {
            lineNumber++;
            if(lineNumber * 20 > 1122.515625) {
                lineNumber = 1;
                newPage = true;
                document.body.appendChild(pageTest as HTMLDivElement);
            }

            if(newPage) {
                newPage = false;
                pageTest = document.createElement("div");
                pageTest.className = "page";
                pageTest.style.lineHeight = "20px";
                pageTest.style.fontSize = "20px";
                pageTest.style.fontFamily = "Sangbleu Kingdom";
                pageTest.style.letterSpacing = "0px";
            }

            const newLine = document.createElement("div");
            newLine.style.display = "block";
            if(line === "") {
                newLine.style.height = "1em";
            }
            newLine.innerHTML = line;
            pageTest.appendChild(newLine);
        }

        document.body.innerHTML += "body created : " + (new Date().getTime() - initTime) + "<br>";
        initTime = new Date().getTime();

        document.body.appendChild(pageTest as HTMLDivElement);
        document.body.style.color = (document.body.style.color === "red") ? "blue": "red";
        resolve("…document generated");
    });
}