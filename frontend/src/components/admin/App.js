import { Layout, Menu, Breadcrumb } from 'antd';
import Mheader from '../common/Mheader'
import Mfooter from '../common/Mfooter'
const { Header, Content, Footer } = Layout;

export default function App(params) {
  return (
    <Layout className="layout">
      <Mheader selectedKey={'2'}></Mheader>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Admin</div>
      </Content>
      <Mfooter/>
    </Layout>
  )
}
