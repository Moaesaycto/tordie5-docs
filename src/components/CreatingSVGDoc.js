import React from "react";
import { Typography, Divider } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title, Paragraph } = Typography;

const CreatingSVGDoc = () => {
    return (
        <div>
            <Title level={2}>
                Creating the SVG Document
            </Title>
            <Paragraph>To create an SVG document, you can use the following code:</Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`from tordie import Drawing\n\nsvg_doc = Drawing()`}
            </SyntaxHighlighter>
            <Paragraph>
                By default, this drawing comes present with several options that define the features of all of the objects that are rendered. You will be able to change these later.
            </Paragraph>
            <Paragraph>To save this drawing, you can do so by running the following:</Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`from tordie import Drawing\n\nsvg_doc = Drawing()\nsvg_doc.save()`}
            </SyntaxHighlighter>
            <Paragraph>
                This should save a simple SVG file called <code>drawing.svg</code> in the current directory. You can change the filename by passing in a string to the <code>save</code> method. You can include the <code>.svg</code>, however, this isn't necessary.
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`from tordie import Drawing\n\nsvg_doc = Drawing()\nsvg_doc.save("my_drawing.svg")`}
            </SyntaxHighlighter>
            <Divider />
        </div>

    )
}

export default CreatingSVGDoc;