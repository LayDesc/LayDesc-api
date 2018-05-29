import {LayDesc} from "../../../src/main";

// import * as LayDesc from "../../../dist/LayDesc.js"

LayDesc.DEBUG = true;

console.log(LayDesc);

const doc = new LayDesc.Document({
    guides: {
        show: true,
        horizontal: [
            new LayDesc.Guides.Horizontal(10),
        ]
    },
    pageTemplates: [
        {
            name: "left",
        },
        new LayDesc.PageTemplate("hello"),
    ]
});

console.log(doc);

const template = new LayDesc.PageTemplate("hello");
console.log(template);

const template2 = new LayDesc.PageTemplate("hello", {
    marginSettings: {
        bottom: 100,
    }
});
console.log(template2);