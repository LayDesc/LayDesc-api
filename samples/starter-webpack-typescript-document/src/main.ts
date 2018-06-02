import * as layDesc from "../../../src/main";
import {Page} from "../../../src/page/page/Page";
import {PageTemplate} from "../../../src/page/pageTemplate/PageTemplate";

layDesc.env.parameters.DEBUG = true;

const newPageTest = new Page({
    name: "newPageTest",
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
    ]
});

newPageTest.name = "change";

console.log("...", newPageTest, doc, "...");

// delay
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

processArray([1, 2, 3]);
console.log("done");

const anOtherDoc = new layDesc.document.Document();