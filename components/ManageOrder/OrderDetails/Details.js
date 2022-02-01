import { FaEdit } from "react-icons/fa";

const Details = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <div className="content__sidebar">
        <div className="client-order-details__view">
          <h2>Order Details</h2>
          <ul className="order-info__list">
            <li>
              <span className="list-text">Recepiant</span>
              <span className="list-title">Erick Fernos</span>
            </li>
            <li>
              <span className="list-text">Order ID</span>
              <span className="list-title">#27839-00</span>
            </li>
            <li>
              <span className="list-text">Location</span>
              <span className="list-title">
                Atlanta <img src="/images/table/us-flag.png" alt="" /> United States
              </span>
            </li>
            <li>
              <span className="list-text">Due Date</span>
              <span className="list-title">12 Nov 2021</span>
            </li>
            <li>
              <span className="list-text">Ship Date</span>
              <span className="list-title">10 Nov 2021</span>
            </li>
            <li>
              <span className="list-text">Payment Status</span>
              <span className="badge bg-red">Not Paid</span>
            </li>
            <li>
              <span className="list-text">Notecard Cost</span>
              <span className="list-title">$100</span>
            </li>
            <li>
              <span className="list-text">Delivery Cost</span>
              <span className="list-title">$320</span>
            </li>
            <li>
              <span className="list-text">Total</span>
              <span className="list-title">$15,302.00</span>
            </li>
          </ul>
          <div className="order-info__buttons">
            <a href="#" className="btn btn-outline">
              <FaEdit />
              <span>Edit Order Info</span>
            </a>
            <a href="#" className="btn btn-theme">
              <span>Pay Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
