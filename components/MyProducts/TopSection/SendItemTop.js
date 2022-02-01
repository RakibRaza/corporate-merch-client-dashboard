import Link from 'next/link';
import { useState } from 'react';
import Cart from './Cart';

const SendItemTop = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="section__header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <div className="send-item__breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/client/my-products">
                            <a>My Product</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Send Item
                        </li>
                      </ul>
                    </nav>
                    <div className="send-item__product__name">
                      <h2>Send Swag</h2>
                    </div>
                  </div>
                </div>
                <div className="section__top__right">
                  <div className="section__top__right__item">
                    <a onClick={(e) => {
                      e.preventDefault();
                      setShowCart(true);
                    }} className="cart-button" href="#">
                      <img src="/images/icons/Bag.svg" alt="" />
                      <div className="cart-button-total">
                        <span className="cart-total">2</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </>
  )
}

export default SendItemTop;
