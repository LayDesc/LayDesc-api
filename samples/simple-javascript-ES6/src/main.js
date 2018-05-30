import * as layDesc from "../../../lib/layDesc/main"

const doc = new layDesc.Document({
    guides: {
        show: true,
        vertical: new layDesc.Vertical(10),
    }
});

console.log(doc);
