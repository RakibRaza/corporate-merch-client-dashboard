import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShipmentTable = () => {
  return (
    <section className="client-shipment-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="client-shipment-area__content">
              <div className="client-shipment__table">
                <table className="table-shape">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Recipient Name</th>
                      <th>Status</th>
                      <th>Address</th>
                      <th>Tracking ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="product-title">
                          <img src="/images/product/drift-backpack.png" alt="" />
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
                        <span className="badge bg-yellow">On Route</span>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <div className="badge bg-blue">
                          <img src="/images/icons/edit-theme.svg" alt="" />
                          <span> Track Shipment</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-title">
                          <img src="/images/product/drift-backpack.png" alt="" />
                          <span>Drift Backpack Vol 3</span>
                        </div>
                      </td>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/3.png" alt="" />
                          <div className="client-text">
                            <h2>Sussan Willams</h2>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-blue">In Warehouse</span>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <div className="badge bg-blue">
                          <img src="/images/icons/edit-theme.svg" alt="" />
                          <span> Track Shipment</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="product-title">
                          <img src="/images/product/drift-backpack.png" alt="" />
                          <span>Drift Backpack Vol 3</span>
                        </div>
                      </td>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/3.png" alt="" />
                          <div className="client-text">
                            <h2>Armando Gibson</h2>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-yellow">On Route</span>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <div className="badge bg-blue">
                          <img src="/images/icons/edit-theme.svg" alt="" />
                          <span> Track Shipment</span>
                        </div>
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

export default ShipmentTable;
