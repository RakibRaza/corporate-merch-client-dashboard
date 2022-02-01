import Link from 'next/link';
import { useState } from 'react';
import data from '../../../public/data/orders';

const Products = () => {
  const [orders, setOrders] = useState(data);
  return (
    <section className="client-order__area">
      <div className="container-fluid">
        <div className="row">
          {orders.map(({ id, orderId, title, img, status }) => (
            <div key={id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="client-order__item">
                <div className="client-order__top">
                  <span className={`badge ${status.toLowerCase().startsWith("p") ? "bg-yellow" : status.toLowerCase().startsWith("i") ? "bg-blue" : "bg-green"}`}>{status}</span>
                </div>
                <div className="client-order__img">
                  <img src={img.src} alt={title} />
                </div>
                <div className="client-order__info">
                  <h3>Order ID {orderId}</h3>
                  <h2>{title}</h2>
                </div>
                <ul className="client-order__size">
                  <li><span>Size:</span></li>
                  <li><span className="size">S</span></li>
                  <li><span className="size">M</span></li>
                  <li><span className="size">L</span></li>
                  <li><span className="size">XL</span></li>
                </ul>
                <div className="client-order__button">
                  <Link href={`/manage-order/${encodeURIComponent(id)}`}>
                    <a className="btn btn-theme">
                      View Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
