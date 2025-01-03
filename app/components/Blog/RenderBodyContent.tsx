import config from "@/sanity/config/client-config";
import { Blog } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type ImageComponentProps = {
  value: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  isInline: boolean;
};

const ImageComponent = ({ value, isInline }: ImageComponentProps) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div>
      <Image
        src={
          urlBuilder(config)
            .image(value)
            .fit("max")
            .auto("format")
            .url() as string
        }
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        style={{
          display: isInline ? "inline" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

type CodeProps = {
  value: {
    language: string;
    code: string;
  };
};

const Code = ({ value }: CodeProps) => {
  return (
    <div className="my-10">
      <SyntaxHighlighter language={value.language} style={dracula}>
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

type TableProps = {
  value: {
    rows: {
      _key: string;
      cells: string[];
    }[];
  };
};

const Table = ({ value }: TableProps) => {
  return (
    <div className="my-10">
      <table>
        <tbody>
          {value.rows.map((row) => (
            <tr key={row._key}>
              {row.cells.map((cell, key) => (
                <td key={key} className="first-of-type:bg:gray-100 max-w-[100px]">
                  <span className="px-4">{cell}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
    code: Code,
    table: Table,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <>
      <PortableText value={post?.body} components={components} />
    </>
  );
};

export default RenderBodyContent;