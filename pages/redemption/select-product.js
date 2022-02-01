import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import GiveawaySteps from "../../components/Redemption/GiveawayLink/GiveawaySteps";
import GiveawayTop from "../../components/Redemption/GiveawayLink/GiveawayTop";

const SelectProduct = () => {
  return (
    <div className="main-content">
      <GiveawayTop />
      <section className="giveway__steps">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="giveway__steps__area">
                <GiveawaySteps />
                <fieldset>
                  <div className="giveway__steps__item">
                    <div className="giveway__steps__item__title">
                      <h2>Product Information</h2>
                    </div>
                    <div className="giveway__steps__item__content">
                      <div className="giveway__steps__table">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div className="info__group">
                                  <label>Select Product</label>
                                  <select>
                                    <option value="">Aenean nec suscip T-Shirt New 2021 Vol 3</option>
                                  </select>
                                </div>
                              </td>
                              <td>
                                <div className="info__group">
                                  <label>Budget Per Giveaway</label>
                                  <select>
                                    <option value="60">$60</option>
                                    <option value="70">$70</option>
                                    <option value="80">$80</option>
                                  </select>
                                </div>
                              </td>
                              <td>
                                <div className="info__group">
                                  <label>Closing Date (Optional)</label>
                                  <select>
                                    <option value="">Select Date</option>
                                  </select>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a className="text-theme" href="#"> + Add More Product  </a>
                      <div className="giveway__steps__product__item">
                        <div className="product__item__img">
                          <img src="/images/product/order-9.png" alt="" />
                        </div>
                        <div className="product__item__info">
                          <h2>Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                          <div className="gender">
                            Gender: <span>Male</span>
                          </div>
                          <ul className="color__list">
                            <li><span>Colors:</span></li>
                            <li>
                              <span className="color-item bg-yellow"></span>
                            </li>
                            <li>
                              <span className="color-item bg-blue"></span>
                            </li>
                            <li>
                              <span className="color-item bg-yellow"></span>
                            </li>
                            <li>
                              <span className="color-item bg-blue"></span>
                            </li>
                          </ul>
                          <div className="product-size">
                            <h2>Size:</h2>
                            <ul>
                              <li>
                                <div className="size">
                                  S
                                </div>
                              </li>
                              <li>
                                <div className="size">
                                  M
                                </div>
                              </li>
                              <li>
                                <div className="size">
                                  L
                                </div>
                              </li>
                              <li>
                                <div className="size">
                                  XL
                                </div>
                              </li>
                              <li>
                                <div className="size">
                                  3XL
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="product-stock">
                            <h2>In Stock:</h2>
                            <ul>
                              <li>
                                <span>200</span>
                              </li>
                              <li>
                                <a href="#" className="text-theme"> + Add More </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="giveway__steps__buttons">
                      <Link href="/redemption">
                        <a className="btn btn-outline-theme"> Cancel </a>
                      </Link>
                      <Link href="/redemption/giveaway-details">
                        <a className="btn btn-theme"> Next <span> <FaArrowRight /> </span> </a>
                      </Link>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SelectProduct;
