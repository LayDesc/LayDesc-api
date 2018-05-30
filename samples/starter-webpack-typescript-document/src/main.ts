import * as layDesc from "../../../src/main";

layDesc.env.DEBUG = true;

console.log(layDesc);

const doc = new layDesc.Document({
    guides: {
        show: true,
        horizontal: [
            new layDesc.Horizontal(10),
        ]
    },
    pageTemplates: [
        {
            name: "left",
        },
        new layDesc.PageTemplate("hello"),
    ]
});

console.log(doc);

const template = new layDesc.PageTemplate("hello");
console.log(template);

const template2 = new layDesc.PageTemplate("hello", {
    marginSettings: {
        bottom: 100,
    }
});
console.log(template2);