import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function Mheader(props) {
  const { selectedKey } = props;
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectedKey || '1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"> <a href="/home/home.html">home</a> </Menu.Item>
        <Menu.Item key="2"> <a href="/admin/admin.html">admin</a> </Menu.Item>
        <Menu.Item key="3">profill</Menu.Item>
      </Menu>
    </Header>
  )

}