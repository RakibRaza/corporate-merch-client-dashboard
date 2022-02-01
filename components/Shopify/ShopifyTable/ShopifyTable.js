import { FaPhoneAlt } from "react-icons/fa"

const ShopifyTable = () => {
  return (
    <section className="shopify">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="shopify__heading">
              <input type="search" placeholder="Enter Shopify API Key here..." />
              <button type="submit" className="btn btn-theme">Connect</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="shopify__content">
              <div className="shopify__content__top">
                <h2>Shopify - Store name</h2>
              </div>
              <div className="shopify__table">
                <table className="table-shape">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Recipient Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Sync</th>
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
                        <a href="#" className="btn btn-sync">Sync Now</a>
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
                            <h2>Susan Williams</h2>
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
                        <a href="#" className="btn btn-sync">Sync Now</a>
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
                            <h2>Armando Gibson</h2>
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
                        <a href="#" className="btn btn-sync">Sync Now</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopifyTable
