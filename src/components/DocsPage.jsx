// src/components/DocsPage.js
import React, { useRef } from "react";
import { Layout, Menu } from "antd";
import GettingStarted from "./GettingStarted";
import Installation from "./Installation";
import CreatingSVGDoc from "./CreatingSVGDoc";
import CustomizingSVGDoc from "./CustomizingSVGDoc";
import Points from "./Points";
import Elines from "./ELines";

const { Header, Sider, Content } = Layout;

const sections = [
  {
    title: "Getting Started",
    id: "getting-started",
    component: GettingStarted,
  },
  {
    title: "Installation",
    id: "installation",
    component: Installation,
  },
  {
    title: "Creating the SVG Document",
    id: "creating-the-svg-document",
    component: CreatingSVGDoc,
  },
  {
    title: "Customizing the SVG Document",
    id: "customizing-the-svg-document",
    component: CustomizingSVGDoc,
  },
  {
    title: "Points",
    id: "points",
    component: Points,
  },
  {
    title: "Euclidean Line Segments",
    id: "euclidean-line-segments",
    component: Elines,
  },
];

const DocsPage = () => {
  const contentRef = useRef(null);

  const handleMenuClick = (id) => {
    const sectionRef = document.getElementById(id);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            {sections.map((section, index) => (
              <Menu.Item
                key={index + 1}
                onClick={() => handleMenuClick(section.id)}
              >
                <a href={`#${section.id}`} style={{ textDecoration: 'none' }}>{section.title}</a>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
              overflowY: "auto",
            }}
            ref={contentRef}
          >
            {sections.map((section, index) => {
              const SectionComponent = section.component;
              return (
                <div id={section.id} key={index}>
                  <SectionComponent />
                </div>
              );
            })}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DocsPage;
