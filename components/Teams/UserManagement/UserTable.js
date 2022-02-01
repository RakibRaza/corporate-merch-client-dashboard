import { FaPhoneAlt } from 'react-icons/fa'

const UserTable = () => {
  return (
    <section className="user-management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="user-management__content">
              <div className="user-management__table">
                <table className="table-shape">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Assigned Team</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/1.png" alt="" />
                          <div className="client-text">
                            <h2>ESSie Ward</h2>
                            <p>lu@sa.co.uk</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="company-name">Acme Inc.</span>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <div className="phone">
                          <FaPhoneAlt />
                          <span> (847) 785-2310</span>
                        </div>
                      </td>
                      <td>
                        <span className="assign-team hr">New York-HR</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-theme">Assign New Team</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/1.png" alt="" />
                          <div className="client-text">
                            <h2>ESSie Ward</h2>
                            <p>lu@sa.co.uk</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="company-name">Acme Inc.</span>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <div className="phone">
                          <FaPhoneAlt />
                          <span> (847) 785-2310</span>
                        </div>
                      </td>
                      <td>
                        <span className="assign-team hr">New York-HR</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-theme">Assign New Team</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="client-info">
                          <img src="/images/users/1.png" alt="" />
                          <div className="client-text">
                            <h2>ESSie Ward</h2>
                            <p>lu@sa.co.uk</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="company-name">Acme Inc.</span>
                      </td>
                      <td>
                        <span className="address">
                          4373 Washburn Street, <br />
                          Baton Rouge, LA
                        </span>
                      </td>
                      <td>
                        <div className="phone">
                          <FaPhoneAlt />
                          <span> (847) 785-2310</span>
                        </div>
                      </td>
                      <td>
                        <span className="assign-team sales">New York-Sales</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-theme">Assign New Team</a>
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

export default UserTable
