// src/components/GettingStarted.js
import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

const GettingStarted = () => (
  <div>
    <Title level={2}>
      Getting Started
    </Title>
    <Paragraph>
      TORDIE is a vector graphics generator with the intention of
      applications in origami and paper scoring for folding. It was officially presented at 8OSME in 2024, and has
      since begun development in its fifth iteration. For the previous versions, you can find them here:
      <ul>
        <li><a href="https://tordie-v4.github.io/">TORDIE4</a>: This version was the version presented in 2024, however,
        the code is extremely messy and may not be user-friendly. Most features available in this one will be upgraded slowly
        to this version.</li>
        <li><a href="https://github.com/Moaesaycto/tordie">TORDIE</a> (version 3): This version contained several features that
        will not be upgraded to version 5, including animation. The code is even more unreadable than in TORDIE4.</li>
        <li>Other versions of TORDIE are not available, however, all their functionality is included in the above versions.</li>
      </ul>
      Development is being prioritised for this version, and the documentation is being updated to reflect the changes.
    </Paragraph>
    <Divider />
  </div>
);

export default GettingStarted;
