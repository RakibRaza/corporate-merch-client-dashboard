import 'bootstrap/dist/css/bootstrap.min.css';
import "flag-icon-css/css/flag-icons.min.css";
import "slick-carousel/slick/slick.css";
import Layout from '../components/Common/Layout/Layout';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

