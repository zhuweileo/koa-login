import { Layout, Menu, Breadcrumb } from 'antd';
import Mheader from '../common/Mheader'
import Mfooter from '../common/Mfooter'
const { Header, Content, Footer } = Layout;

export default function App(params) {
  return (
    <Layout className="layout">
      <Mheader selectedKey={'1'}></Mheader>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>home</div>
      </Content>
      <Mfooter/>
    </Layout>
  )
}
