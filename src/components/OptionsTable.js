// src/components/OptionsTable.js
import React from "react";
import { Typography, Table } from "antd";

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
    default: "2",
  },
  {
    option: "point_radius (int)",
    description: "The radius of the points in the SVG document.",
    default: "3",
  },
  {
    option: "point_stroke (string)",
    description: "The colour of the stroke of the points in the SVG document.",
    default: "\"black\"",
  },
  {
    option: "line_stroke (string)",
    description: "The colour of the stroke of the lines in the SVG document.",
    default: "\"black\"",
  },
  {
    option: "line_stroke_alts (List[string])",
    description: "The alternate colours of the stroke for lines in the SVG document.",
    default: "[\"red\", \"blue\", \"black\"]",
  },
  {
    option: "document_background (string)",
    description: "The background colour of the SVG document.",
    default: "\"white\"",
  },
  {
    option: "document_width (int)",
    description: "The width of the SVG document.",
    default: "800",
  },
  {
    option: "document_height (int)",
    description: "The height of the SVG document.",
    default: "800",
  },
  {
    option: "document_bounds (int)",
    description: "The bounds of the SVG document.",
    default: "16",
  },
  {
    option: "mathematics_scale (Tuple[int, int])",
    description: "The scale of the mathematics in the SVG document.",
    default: "(1, 1)",
  },
];

data.sort((a, b) => a.option.localeCompare(b.option));

const OptionsTable = () => (
  <div className="py-5">
    <Table columns={columns} dataSource={data} pagination={false} />
  </div>
);

export default OptionsTable;
