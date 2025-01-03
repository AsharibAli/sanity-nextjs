const code = {
    title: "Code",
    name: "code",
    type: "object",
    fields: [
        {
            title: "Language",
            name: "language",
            type: "string",
            options: {
                list: [
                    { title: "Javascript", value: "javascript" },
                    { title: "HTML", value: "html" },
                    { title: "CSS", value: "css" },
                    { title: "React", value: "react" },
                    { title: "Node", value: "node" },
                    { title: "MySql", value: "mysql" },
                    { title: "ZH", value: "zh", mode: "sh" },
                ],
            },
        },
        {
            title: "Code",
            name: "code",
            type: "text",
        },
    ],
};
export default code;