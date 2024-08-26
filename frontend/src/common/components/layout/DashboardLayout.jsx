import React, { useState, useEffect, useRef } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Grid } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  })
);

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef(null);
  const screens = useBreakpoint();
  const isLargeScreen = screens.lg;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (isLargeScreen) {
      setCollapsed(false);
    }
  }, [isLargeScreen]);

  const handleMenuClick = () => {
    if (!isLargeScreen) {
      setCollapsed(true);
    }
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !isLargeScreen &&
      !collapsed
    ) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    if (!isLargeScreen && !collapsed) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [collapsed, isLargeScreen]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        ref={sidebarRef}
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        breakpoint="lg"
        collapsedWidth={0}
        width={250}
        style={{
          position: "fixed",
          height: "100vh",
          zIndex: 1000,
          top: 0,
          left: 0,
          transition: "transform 0.2s ease",
          transform: collapsed ? "translateX(-100%)" : "translateX(0)",
        }}
        trigger={null}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleMenuClick}
          style={{
            marginTop: "60px",
          }}
        />
      </Sider>

      <Layout
        style={{
          marginLeft: isLargeScreen ? 250 : 0,
          transition: "margin-left 0.2s ease",
          position: "relative",
        }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "relative",
          }}>
          {!isLargeScreen && collapsed && (
            <Button
              className="absolute top-4 left-4"
              icon={<MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              style={{ zIndex: 1100 }}
            />
          )}
        </Header>

        <Content
          style={{
            margin: "24px 16px 0",
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            position: "relative",
            zIndex: 1,
          }}>
          {children}
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
