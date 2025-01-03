/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
const blockContent = {
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
            ],
            lists: [{ title: "Bullet", value: "bullet" }],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                ],
                annotations: [
                    {
                        title: "URL",
                        name: "link",
                        type: "object",
                        fields: [
                            { title: "URL", name: "href", type: "string" },
                            { title: "Open in new tab", name: "blank", type: "boolean" },
                        ],
                        initialValue: { blank: true },
                    },
                ],
            },
        },
        { type: "image", options: { hotspot: true } },
        {
            type: "code",
            name: "code",
            title: "Code Blocks",
            options: {
                languageAlternatives: [
                    { title: "Javascript", value: "javascript" },
                    { title: "HTML", value: "html" },
                    { title: "CSS", value: "css" },
                    { title: "React", value: "react" },
                    { title: "Node", value: "node" },
                    { title: "MySql", value: "mysql" },
                    { title: "ZH", value: "zh", mode: "sh" },
                ],
                withFilename: false,
            },
        },
        {
            type: "object",
            name: "table",
            title: "Table",
            fields: [
                {
                    name: "rows",
                    title: "Rows",
                    type: "array",
                    of: [{ type: "object", fields: [{ name: "cells", type: "array", of: [{ type: "string" }] }] }],
                },
            ],
        },
    ],
};
export default blockContent;