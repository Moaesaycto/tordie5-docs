import React from "react";
import { Typography, Divider } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title, Paragraph } = Typography;

const Points = () => {
    return (
        <div>
            <Title level={2}>
                Working with Points
            </Title>
            <Paragraph>
                Points are a type of Vertex in TORDIE. They are the most basic form, which can be used to handle the vertices of a polygon or a line,
                as well as general points in space and transformations. Points have the following necessary attributes:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`Point(\n\tx: float,\n\ty: float,\n\tpolar: bool = False,\n\tstroke: str = None,\n\tpoint_radius: float = None\n)`}
            </SyntaxHighlighter>
            <Paragraph>
                When using <code>polar</code>, TORDIE will treat the <code>x</code> and <code>y</code> values as polar coordinates of the form <code>(r, θ)</code>. Furthermore,
                for specific customizations for individual points, you can use the <code>stroke</code> and <code>point_radius</code> attributes. The <code>stroke</code> attribute
                will change the color of the point, while the <code>point_radius</code> attribute will change the size of the point.
            </Paragraph>
            <Paragraph>
                A simple example of a point representing the origin is as follows:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
                {`from tordie import Point, Drawing\n\nsvg_doc = Drawing()\npoint = Point(0, 0)\n\nsvg_doc.add_shape(point)\nsvg_doc.save("point.svg")`}
            </SyntaxHighlighter>
            <Paragraph>
                By default, the options are set to the domain of the point being <code>(-1, 1)</code> for both <code>x</code> and <code>y</code>, and the color of the point is set to black.
            </Paragraph>
            <Divider />
        </div>
    );
};

export default Points;
