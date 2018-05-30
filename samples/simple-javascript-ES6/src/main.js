import * as layDesc from "../../../lib/layDesc/main"

const doc = new layDesc.document.Document({
    guides: {
        show: true,
        vertical: new layDesc.guide.Vertical(10),
    }
});

console.log(doc);
