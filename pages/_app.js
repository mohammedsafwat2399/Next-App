import "../style/globals.css";
import Layout from "../components/layout/layout";
function myApp({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /></Layout>
}

export default myApp;
