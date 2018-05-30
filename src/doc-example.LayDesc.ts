import {IDocumentData} from "./document/IDocumentData";

const doc: IDocumentData = {
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
    pageTemplates: [
        {
            name: "hello",
            margin: {
                bottom: 10,
                left: 10,
                right: 10,
                top: 10,
            }
        }
    ]
};
