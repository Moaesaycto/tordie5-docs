// src/components/DocsPage.js
import React from "react";
import { Layout, Menu, Typography, Divider, Table } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const columns = [
  {
    title: "Option",
    dataIndex: "option",
    key: "option",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Default",
    dataIndex: "default",
    key: "default",
  }
];

const data = [
  {
    option: "filename (string)",
    description: "The name of the file to save the SVG document to.",
    default: "\"drawing.svg\"",
  },
  {
    option: "stroke (string)",
    description: "The colour of the stroke of the SVG document.",
    default: "\"black\"",
  },
  {
    option: "stroke_width (int)",
    description: "The width of the stroke of the SVG document.",
    default: "3",
  },
  {
    option: "point_radius (int)",
    description: "The radius of the points in the SVG document.",
    default: "3",
  },
  {
    option: "point_fill (string)",
  }
];


const DocsPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", fontSize: "24px" }}>
        TORDIE Documentation
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">Getting Started</Menu.Item>
            <Menu.Item key="2">Installation</Menu.Item>
            <Menu.Item key="3">Usage</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Title level={2} id="getting-started">
              Getting Started
            </Title>
            <Paragraph>
              TORDIE is a vector graphics generator with the intention of
              applications in origami and paper scoring for folding.
            </Paragraph>
            <Divider />

            <Title level={2} id="installation">
              Installation
            </Title>
            <Paragraph>
              Begin by cloning the{" "}
              <a href="https://github.com/Moaesaycto/Tordie5">
                TORDIE5 repository
              </a>
              . Then, in the parenting directory of the repository, run the
              following command:
            </Paragraph>
            <SyntaxHighlighter language="bash" style={coy}>
              pip install -e .
            </SyntaxHighlighter>
            <Paragraph>
              If you want to run this in a virutal environment, you can create
              one and activate one by running:
            </Paragraph>
            <SyntaxHighlighter language="bash" style={coy}>
              python -m venv venv
            </SyntaxHighlighter>
            <Paragraph>
              Then, you can activate the virtual environment with:
            </Paragraph>
            <SyntaxHighlighter language="bash" style={coy}>
              source venv/bin/activate
            </SyntaxHighlighter>
            <Paragraph>
              If you are on Windows, you can instead activate it with:
            </Paragraph>
            <SyntaxHighlighter language="bash" style={coy}>
              venv\Scripts\activate
            </SyntaxHighlighter>
            <Paragraph>
              In the parenting folder, you can create a simple file and import
              the module by doing the following:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
              {`import tordie`}
            </SyntaxHighlighter>
            <Divider />

            <Title level={2} id="usage">
              Creating the SVG Document
            </Title>
            <Paragraph>
              To create an SVG document, you can use the following code:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
              {`from tordie import Drawing\n\nsvg_doc = Drawing()`}
            </SyntaxHighlighter>
            <Paragraph>
              By default, this drawing comes present with several options that
              define the features of all of the objects that are rendered. You
              will be able to change these later.
            </Paragraph>
            <Paragraph>
              To save this drawing, you can do so by running the following:
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
              {`from tordie import Drawing\n\nsvg_doc = Drawing()\nsvg_doc.save()`}
            </SyntaxHighlighter>
            <Paragraph>
              This should save a simple SVG file called <code>drawing.svg</code>{" "}
              in the current directory. You can change the filename by passing
              in a string to the <code>save</code> method. You can include the{" "}
              <code>.svg</code>, however, this isn't necessary.
            </Paragraph>
            <SyntaxHighlighter language="python" style={coy}>
              {`from tordie import Drawing\n\nsvg_doc = Drawing()\nsvg_doc.save("my_drawing.svg")`}
            </SyntaxHighlighter>
            <Divider />

            <Title level={2} id="customizing">
              Customizing the SVG Document
            </Title>
            <Paragraph>
              All of the inner workings of TORDIE are handled by specific
              options, stored in an <code>Options</code>
              object. When initialising your document, you should pass in an{" "}
              <code>Options</code> object to the constructor.
            </Paragraph>
            <Table columns={columns} dataSource={data} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DocsPage;
