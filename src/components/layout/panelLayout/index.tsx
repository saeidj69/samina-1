import React, { ReactNode, useState } from "react";
import Navbar from "../../navbar";
import MenuBar from "../../menu";
import SideBar from "../../sideBar";
import { StyledContainer } from "./style";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;

const PanelLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <StyledContainer>
      <Layout style={{width:'100%'}}>
        <Sider trigger={null} style={{ background: 'white' }} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ background: colorBgContainer }} className="header">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Navbar />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              maxHeight: "850px",
              background: colorBgContainer,
              minHeight: "850px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </StyledContainer>
  );
};

export default PanelLayout;
