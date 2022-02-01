import Link from 'next/link';

const Cart = ({ showCart, setShowCart }) => {
  return (
    <div className={`cart-sidebar ${showCart ? "show-sidebar" : ""}`}>
      <div className="cart-sidebar__top">
        <h2>Cart</h2>
        <a onClick={(e) => {
          e.preventDefault();
          setShowCart(false);
        }} href="#" className="cart-sidebar-close">
          <img src="/images/icons/Cross.svg" alt="" />
        </a>
      </div>
      <div className="cart-sidebar__content">
        <div className="cart-sidebar__item">
          <div className="cart-sidebar__item__img">
            <img src="/images/product/tshirt03.png" alt="" />
          </div>
          <div className="cart-sidebar__item__info">
            <h2>Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
            <ul className="product__item__info">
              <li>
                <div className="product__item__gender">
                  Size: <span>L</span>
                </div>
              </li>
              <li>
                <div className="product__item__color">
                  Color: <span className="color bg-tundora"></span>
                </div>
              </li>
            </ul>
            <div className="cart-sidebar__item__input">
              <label htmlFor="quantity1">Quantity:</label>
              <input type="text" id="quantity1" defaultValue="5" />
            </div>
          </div>
          <div className="cart-sidebar__item__delete">
            <a href="#" className="delete-item">
              <img src="/images/icons/trash.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="cart-sidebar__item">
          <div className="cart-sidebar__item__img">
            <img src="/images/product/tshirt04.png" alt="" />
          </div>
          <div className="cart-sidebar__item__info">
            <h2>Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
            <ul className="product__item__info">
              <li>
                <div className="product__item__gender">
                  Size: <span>L</span>
                </div>
              </li>
              <li>
                <div className="product__item__color">
                  Color: <span className="color bg-tundora"></span>
                </div>
              </li>
            </ul>
            <div className="cart-sidebar__item__input">
              <label htmlFor="quantity2">Quantity:</label>
              <input type="text" id="quantity2" defaultValue="5" />
            </div>
          </div>
          <div className="cart-sidebar__item__delete">
            <a href="#" className="delete-item">
              <img src="/images/icons/trash.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="cart-sidebar__bottom">
        <Link href="/my-products/send-item">
          <a className="btn btn-theme">
            Send Items
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Cart;
