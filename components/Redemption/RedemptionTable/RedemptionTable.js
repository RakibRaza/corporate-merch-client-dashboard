import { FaEdit, FaTrashAlt } from "react-icons/fa";

const RedemptionTable = () => {
  return (
    <section className="redemption-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="redemption-area__content">
              <div className="redemption__table">
                <table className="table-shape">
                  <thead>
                    <tr>
                      <th>Link Name</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>CLosing Date</th>
                      <th>Action</th>
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
                        <span className="badge bg-green">Active</span>
                      </td>
                      <td>
                        <span className="created-date">
                          Thu, 20 Feb 2021 <br />
                          at 3:42 PM
                        </span>
                      </td>
                      <td>
                        <span className="closing-date">
                          -
                        </span>
                      </td>
                      <td>
                        <div className="action-group">
                          <a className="action-item" href="#">
                            <img src="/images/icons/link.svg" alt="" />
                            <span>Copy Link</span>
                          </a>
                          <a className="action-item" href="#">
                            <img src="/images/icons/qr-code.svg" alt="" />
                            <span>QR Code</span>
                          </a>
                          <a className="edit" href="$">
                            <FaEdit />
                          </a>
                          <a className="delete" href="#">
                            <FaTrashAlt className="trash" />
                          </a>
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
                        <span className="badge bg-green">Active</span>
                      </td>
                      <td>
                        <span className="created-date">
                          Thu, 20 Feb 2021 <br />
                          at 3:42 PM
                        </span>
                      </td>
                      <td>
                        <span className="closing-date">
                          -
                        </span>
                      </td>
                      <td>
                        <div className="action-group">
                          <a className="action-item" href="#">
                            <img src="/images/icons/link.svg" alt="" />
                            <span>Copy Link</span>
                          </a>
                          <a className="action-item" href="#">
                            <img src="images/icons/qr-code.svg" alt="" />
                            <span>QR Code</span>
                          </a>
                          <a className="edit" href="$">
                            <FaEdit />
                          </a>
                          <a className="delete" href="#">
                            <FaTrashAlt className="trash" />
                          </a>
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
                        <span className="badge bg-green">Active</span>
                      </td>
                      <td>
                        <span className="created-date">
                          Thu, 20 Feb 2021 <br />
                          at 3:42 PM
                        </span>
                      </td>
                      <td>
                        <span className="closing-date">
                          -
                        </span>
                      </td>
                      <td>
                        <div className="action-group">
                          <a className="action-item" href="#">
                            <img src="/images/icons/link.svg" alt="" />
                            <span>Copy Link</span>
                          </a>
                          <a className="action-item" href="#">
                            <img src="/images/icons/qr-code.svg" alt="" />
                            <span>QR Code</span>
                          </a>
                          <a className="edit" href="$">
                            <FaEdit />
                          </a>
                          <a className="delete" href="#">
                            <FaTrashAlt className="trash" />
                          </a>
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
                        <span className="badge bg-green">Active</span>
                      </td>
                      <td>
                        <span className="created-date">
                          Thu, 20 Feb 2021 <br />
                          at 3:42 PM
                        </span>
                      </td>
                      <td>
                        <span className="closing-date">
                          -
                        </span>
                      </td>
                      <td>
                        <div className="action-group">
                          <a className="action-item" href="#">
                            <img src="/images/icons/link.svg" alt="" />
                            <span>Copy Link</span>
                          </a>
                          <a className="action-item" href="#">
                            <img src="/images/icons/qr-code.svg" alt="" />
                            <span>QR Code</span>
                          </a>
                          <a className="edit" href="$">
                            <FaEdit />
                          </a>
                          <a className="delete" href="#">
                            <FaTrashAlt className="trash" />
                          </a>
                        </div>
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

export default RedemptionTable;
