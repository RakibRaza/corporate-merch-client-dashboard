import { FaChevronLeft, FaChevronRight, FaPhoneAlt } from "react-icons/fa"

const CarbonTable = () => {
  return (
    <section className="carbon-offset">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="carbon-offset__content bg-content">
              <div className="carbon-offset__table">
                <table className="table-shape">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Recipient Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Carbon Offsets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="product-title">
                          <img src="/images/product/order-9.png" alt="" />
                          <span>Drift Backpack Vol 3</span>
                        </div>
                      </td>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/1.png" alt="" />
                          <div className="client-text">
                            <h2>ESSie Ward</h2>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="phone">
                          <FaPhoneAlt />
                          <span> (847) 785-2310</span>
                        </div>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <span className="offset">$2.42</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-title">
                          <img src="/images/product/order-9.png" alt="" />
                          <span>Drift Backpack Vol 3</span>
                        </div>
                      </td>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/1.png" alt="" />
                          <div className="client-text">
                            <h2>ESSie Ward</h2>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="phone">
                          <FaPhoneAlt />
                          <span> (847) 785-2310</span>
                        </div>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <span className="offset">$2.42</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-title">
                          <img src="/images/product/order-9.png" alt="" />
                          <span>Drift Backpack Vol 3</span>
                        </div>
                      </td>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/1.png" alt="" />
                          <div className="client-text">
                            <h2>ESSie Ward</h2>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="phone">
                          <FaPhoneAlt />
                          <span> (847) 785-2310</span>
                        </div>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <span className="offset">$2.42</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="contact__pagination">
              <div className="contact__pagination__left">
                <h2>Show <span>7</span> from <span className="total">120</span> Contacts</h2>
              </div>
              <div className="contact__pagination__right">
                <ul className="contact__pagination__list">
                  <li>
                    <a href="#">
                      <FaChevronLeft />
                    </a>
                  </li>
                  <li><a className="active" href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">...</a></li>
                  <li><a href="#">12</a></li>
                  <li>
                    <a href="#">
                      <FaChevronRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarbonTable
