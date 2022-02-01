import { useRef } from "react";

const BillTable = () => {
  const inputRef = useRef(null);

  const handleCheck = () => {
    const checkBox = document.getElementsByClassName("table-check");
    const allCheckBox = [...checkBox];

    if (inputRef.current.checked) {
      allCheckBox.forEach(i => i.checked = true);
    } else {
      allCheckBox.forEach(i => i.checked = false);
    }
  }
  return (
    <section className="team-billing__area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="team-billing__content bg-content">
              <div className="team-billing__table">
                <table className="table-shape">
                  <thead>
                    <tr>
                      <th>
                        <input onClick={handleCheck} ref={inputRef} type="checkbox" />
                      </th>
                      <th>Order No</th>
                      <th>Order Item</th>
                      <th>Date</th>
                      <th>Shipping Cost</th>
                      <th>Notecard Costs</th>
                      <th>Carbon offset</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="table-check" />
                      </td>
                      <td>
                        <span className="order-no">#27839-00</span>
                      </td>
                      <td>
                        <div className="order-item">
                          <select name="order-item" id="order-item">
                            <option value="">Swag bag</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <span className="date">
                          Nov 03, 2021
                        </span>
                      </td>
                      <td>
                        <span className="shipping-cost">
                          $15
                        </span>
                      </td>
                      <td>
                        <span className="notecard-cost">
                          $10
                        </span>
                      </td>
                      <td>
                        <span className="carbon-offset">
                          $30
                        </span>
                      </td>
                      <td>
                        <span className="totla">
                          $15,302.00
                        </span>
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

export default BillTable;
