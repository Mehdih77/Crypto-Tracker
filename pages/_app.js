import '../styles/globals.css';
import Layout from '../Layout/Layout';
import AuthContext from '../lib/Auth_Context/AuthContext';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <AuthContext >
       <Layout>
          <Component {...pageProps} />
       </Layout>
      </AuthContext>
    </>
  );
}

export default MyApp;
