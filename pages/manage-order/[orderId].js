import { useRouter } from "next/dist/client/router";
import Details from "../../components/ManageOrder/OrderDetails/Details";
import DetailsTop from "../../components/ManageOrder/OrderDetails/DetailsTop";
import Products from '../../components/ManageOrder/OrderDetails/Products';
import Loader from "../../components/Common/Loader/Loader";
import data from '../../public/data/orders';

const OrderId = () => {
  const router = useRouter();
  if (router.isFallback) {
    return (<Loader />);
  }
  return (
    <div className="main-content">
      <DetailsTop />
      <section className="client-order-details__area">
        <div className="container-fluid">
          <div className="row">
            <Products />
            <Details />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderId;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { orderId: "1" }
      },
      {
        params: { orderId: "2" }
      },
      {
        params: { orderId: "3" }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const order = data.find(item => item.id === parseFloat(params.orderId));

  if (!order?.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      order
    }
  }
}
