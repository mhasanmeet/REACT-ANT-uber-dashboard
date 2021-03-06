import { Layout, Image } from "antd";
import SideMenu from "./components/SideMenu";
import AppRoutes from "./components/Routes";


const { Sider, Content, Footer } = Layout;

function App() {
  return(
    <Layout>

      <Sider style={{height: "100vh", backgroundColor: 'white'}}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol-700x394.jpg" preview={false}/>
        <SideMenu/>
      </Sider>

      <Layout>

        <Content style={{backgroundColor: 'ash'}}>
          <AppRoutes/>
        </Content>

        <Footer style={{textAlign: 'center', backgroundColor: 'white'}}>
          <p>Uber Eats Restaurent Dashboard | 2022</p>
        </Footer>

      </Layout>

    </Layout>
  );
}



export default App;
