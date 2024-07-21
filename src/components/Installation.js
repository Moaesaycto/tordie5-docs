// src/components/Installation.js
import React from "react";
import { Typography, Divider } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Title, Paragraph } = Typography;

const Installation = () => (
  <div>
    <Title level={2}>
      Installation
    </Title>
    <Paragraph>
      Begin by cloning the{" "}
      <a href="https://github.com/Moaesaycto/Tordie5">TORDIE5 repository</a>.
      Then, in the parenting directory of the repository, run the following
      command:
    </Paragraph>
    <SyntaxHighlighter language="bash" style={coy}>
      pip install -e .
    </SyntaxHighlighter>
    <Paragraph>
      If you want to run this in a virtual environment, you can create one
      and activate one by running:
    </Paragraph>
    <SyntaxHighlighter language="bash" style={coy}>
      python -m venv venv
    </SyntaxHighlighter>
    <Paragraph>Then, you can activate the virtual environment with:</Paragraph>
    <SyntaxHighlighter language="bash" style={coy}>
      source venv/bin/activate
    </SyntaxHighlighter>
    <Paragraph>If you are on Windows, you can instead activate it with:</Paragraph>
    <SyntaxHighlighter language="bash" style={coy}>
      venv\Scripts\activate
    </SyntaxHighlighter>
    <Paragraph>
      In the parenting folder, you can create a simple file and import the
      module by doing the following:
    </Paragraph>
    <SyntaxHighlighter language="python" style={coy}>
      {`import tordie`}
    </SyntaxHighlighter>
    <Divider />
  </div>
);

export default Installation;
