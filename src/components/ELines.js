import React from "react";
import { Typography, Divider } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title, Paragraph } = Typography;

const ELines = () => {
    return (
        <div>
            <Title level={2}>
                Working with Euclidean Lines (ELine)
            </Title>
            <Paragraph>
                ELine is a type of Line in TORDIE used to represent Euclidean lines. It connects two points (vertices) in a 2D space. ELine has the following necessary attributes:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`ELine(\n\tstart: Vertex,\n\tend: Vertex,\n\tshow_ends: bool = False,\n\tstroke: str = None,\n\tstroke_width: float = None,\n\talt: int = 0\n)`}
            </SyntaxHighlighter>
            <Paragraph>
                The <code>start</code> and <code>end</code> parameters specify the vertices between which the line is drawn. The <code>show_ends</code> parameter, when set to <code>True</code>, displays the start and end points of the line.
                The <code>stroke</code> and <code>stroke_width</code> parameters customize the color and thickness of the line, respectively. The <code>alt</code> parameter allows selecting alternative stroke styles.
            </Paragraph>
            <Paragraph>
                A simple example of an ELine connecting two points is as follows:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`from tordie import ELine, Vertex, Drawing\n\nsvg_doc = Drawing()\nstart = Vertex(0, 0)\nend = Vertex(1, 1)\nline = ELine(start, end)\n\nsvg_doc.add_shape(line)\nsvg_doc.save("line.svg")`}
            </SyntaxHighlighter>
            <Paragraph>
                By default, the line color (stroke) is set to black and the stroke width is set to a default value unless specified otherwise.
            </Paragraph>
            <Divider />
        </div>
    );
};

export default ELines;
