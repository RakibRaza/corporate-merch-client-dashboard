import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Cart from "./Cart";

const ProductTop = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="section__header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title">
                    Products
                  </h2>
                </div>
                <div className="section__top__right">
                  <div className="section__top__right__item">
                    <form className="bg-item">
                      <input type="search" placeholder="Search Product..." />
                      <span className="btn-search-overlay">
                        <FaSearch />
                      </span>
                    </form>
                  </div>
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

export default ProductTop
