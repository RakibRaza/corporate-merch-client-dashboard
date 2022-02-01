import Link from 'next/link';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
const Products = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    className: "brand-list slide-brands",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="client-order-details__item">
          <div className="client-order-details__img">
            <img src="/images/product/order-6.png" alt="" />
          </div>
          <div className="client-order-details__info">
            <span className="badge bg-green">Pernding Approval</span>
            <h2>Aenean nec suscip T-Shirt New..</h2>
            <ul className="product-meta">
              <li>
                <div className="gender">
                  Gender: <span>Male</span>
                </div>
              </li>
              <li>
                <div className="product__item__color">
                  Color: <span className="color bg-mine"></span>
                </div>
              </li>
            </ul>
            <div className="product-size">
              <h2>Size:</h2>
              <ul>
                <li>
                  <div className="size">
                    S :
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    M :
                    <span>100</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    L :
                    <span>80</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    XL :
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    3XL :
                    <span>02</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="client-order-details__buttons">
              <a href="#" className="btn btn-approve">
                Approve
              </a>
              <a onClick={handleShow} href="#" className="btn btn-request" data-bs-toggle="modal" data-bs-target="#requestChangeModal">
                Request Change
              </a>
            </div>
          </div>
        </div>
        <div className="client-order-details__item">
          <div className="client-order-details__img">
            <img src="/images/product/order-7.png" alt="" />
          </div>
          <div className="client-order-details__info">
            <span className="badge bg-green">Pernding Approval</span>
            <h2>Aenean nec suscip T-Shirt New..</h2>
            <ul className="product-meta">
              <li>
                <div className="gender">
                  Gender: <span>Male</span>
                </div>
              </li>
              <li>
                <div className="product__item__color">
                  Color: <span className="color bg-cloud"></span>
                </div>
              </li>
            </ul>
            <div className="product-size">
              <h2>Size:</h2>
              <ul>
                <li>
                  <div className="size">
                    S :
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    M :
                    <span>100</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    L :
                    <span>80</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    XL :
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    3XL :
                    <span>02</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="client-order-details__buttons">
              <a href="#" className="btn btn-approve">
                Approve
              </a>
              <a onClick={handleShow} href="#" className="btn btn-request" data-bs-toggle="modal" data-bs-target="#requestChangeModal">
                Request Change
              </a>
            </div>
          </div>
        </div>
        <div className="client-order-details__item">
          <div className="client-order-details__img">
            <img src="/images/product/order-8.png" alt="" />
          </div>
          <div className="client-order-details__info">
            <span className="badge bg-green">Pernding Approval</span>
            <h2>Aenean nec suscip T-Shirt New..</h2>
            <ul className="product-meta">
              <li>
                <div className="gender">
                  Gender: <span>Male</span>
                </div>
              </li>
              <li>
                <div className="product__item__color">
                  Color: <span className="color bg-amber"></span>
                </div>
              </li>
            </ul>
            <div className="product-size">
              <h2>Size:</h2>
              <ul>
                <li>
                  <div className="size">
                    S :
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    M :
                    <span>100</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    L :
                    <span>80</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    XL :
                    <span>50</span>
                  </div>
                </li>
                <li>
                  <div className="size">
                    3XL :
                    <span>02</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="client-order-details__buttons">
              <a href="#" className="btn btn-approve">
                Approve
              </a>
              <a onClick={handleShow} href="#" className="btn btn-request" data-bs-toggle="modal" data-bs-target="#requestChangeModal">
                Request Change
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="request-exchange-modal">
        <Modal.Header closeButton>
          <div className="request-exchange-modal__header">
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/client/manage-order">
                    <a>Manage Orders</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  #CM-101
                </li>
              </ul>
            </nav>
            <h2>Aenean nec suscip T-Shirt New..</h2>
          </div>
          <button type="button" className="btn-close">
            <img src="/images/icons/cross-32.svg" alt="" />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Slider {...setting} className="request-exchange-modal__images">
            <div className="request-exchange-modal__img">
              <img src="/images/product/order-9.png" alt="" />
            </div>
            <div className="request-exchange-modal__img">
              <img src="/images/product/order-10.png" alt="" />
            </div>
            <div className="request-exchange-modal__img">
              <img src="/images/product/order-11.png" alt="" />
            </div>
            <div className="request-exchange-modal__img">
              <img src="/images/product/order-9.png" alt="" />
            </div>
            <div className="request-exchange-modal__img">
              <img src="/images/product/order-10.png" alt="" />
            </div>
            <div className="request-exchange-modal__img">
              <img src="/images/product/order-11.png" alt="" />
            </div>
          </Slider>
          <div className="request-exchange-modal__form">
            <div className="input__group__between mb-33">
              <div className="input__group">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" defaultValue="Stephen" />
              </div>
              <div className="input__group">
                <label htmlFor="today">Date</label>
                <div className="input__overlay">
                  <input type="date" id="today" />
                  <img src="/images/icons/calender.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="input__group">
              <label htmlFor="change-note">Required Changes</label>
              <textarea id="change-note" cols="30" rows="5" placeholder="Write here..."></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a onClick={handleClose} className="btn btn-outline-theme">Cancel</a>
          <a className="btn btn-theme">Submit</a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Products;
