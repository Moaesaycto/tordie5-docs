import React from "react";
import { Typography, Divider } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import OptionsTable from "./OptionsTable";

const { Title, Paragraph } = Typography;

const CustomizingSVGDoc = () => {
    return (
        <div>
            <Title level={2}>
                Customizing the SVG Document
            </Title>
            <Paragraph>
                All of the inner workings of TORDIE are handled by specific
                options, stored in an <code>Options</code>
                object. When initialising your document, you should pass in an{" "}
                <code>Options</code> object to the constructor.
            </Paragraph>
            <OptionsTable />
            <Paragraph>
                To change the options of the document, you can do so by creating an instance of an <code>Options</code> class.
                Below is a simple example of this. All customisable options are shown in the table above.
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`from tordie import Drawing, Options\n\noptions = Options(filename="coolname", line_stroke="blue")\nsvg_doc = Drawing(options)`}
            </SyntaxHighlighter>
            <Paragraph>
                We use a class like this because certain operations are useful only in the context of these options and not the drawing itself.
            </Paragraph>
            <Divider />
        </div>

    )
}

export default CustomizingSVGDoc;