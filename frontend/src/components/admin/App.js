import { Layout,  Breadcrumb ,Tabs } from 'antd';
import Mheader from '../common/Mheader'
import Mfooter from '../common/Mfooter'
import NormalLoginForm from './NormalLoginForm'
const {Content} = Layout;

const TabPane = Tabs.TabPane;

export default function App(params) {
  return (
    <Layout className="layout">
      <Mheader selectedKey={'2'}></Mheader>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="登陆" key="1">
              <NormalLoginForm/>
            </TabPane>
            <TabPane tab="注册" key="2">
            </TabPane>
          </Tabs>,
        </div>
      </Content>
      <Mfooter />
    </Layout>
  )
}
