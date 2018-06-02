import * as LayDesc from "./main"
import {Unit} from "./geometry/generic/Unit";

const doc: LayDesc.document.IDocumentData = {
    guides: {
        horizontal: [
            {
              y: 10
            },
            {
              y: 20
            },

            {
              y: 30
            }
        ],
        show: true,
        vertical: [
            {
              x: 10
            },
            {
              x: 20
            },
            {
              x: 30
            }
        ],
    },
    listOfPageTemplate: {
        "hello": {
            name: "hello",
            margin: {
                bottom: 10,
                left: 10,
                right: 10,
                top: 10,
                unit: LayDesc.elements.Unit.MM
            },
            containers: [],
        }
    },
    arrayOfPage: [
        {
            name: "page",
            containers: [],
            margin: {
                unit: Unit.MM,
                right: 10,
                top: 10,
                bottom: 10,
                left: 10,
            }
        }
    ]
};
