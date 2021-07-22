import '../styles/globals.css';
import Layout from '../Layout/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
