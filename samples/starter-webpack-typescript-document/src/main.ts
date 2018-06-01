import * as layDesc from "../../../src/main";

layDesc.env.parameters.DEBUG = true;

console.log(layDesc);

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
        },
        new layDesc.page.PageTemplate({
            name: "hello"
        }),
    ]
});

console.log(doc);

const template = new layDesc.page.PageTemplate({
    name: "hello",
});
console.log(template);

const template2 = new layDesc.page.PageTemplate({
    name: "hello",
    margin: {
        bottom: 100,
    }
});
console.log(template2);



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