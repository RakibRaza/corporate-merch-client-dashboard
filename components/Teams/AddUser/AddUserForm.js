
const AddUserForm = () => {
  return (
    <section className="add-user">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="add-user__content">
              <div className="row">
                <div className="col-md-6">
                  <div className="add-user__info">
                    <div className="add-user__top">
                      <h2>Account Information</h2>
                    </div>
                    <div className="input__group__between mb-28">
                      <div className="input__group">
                        <label htmlFor="first-name">First name</label>
                        <input type="text" id="first-name" defaultValue="Stephen" />
                      </div>
                      <div className="input__group">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" placeholder="Your last name" />
                      </div>
                    </div>
                    <div className="input__group mb-28">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Your email" />
                    </div>
                    <div className="input__group">
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-group mb-12">
                      <input type="tel" id="phone" className="form-control" aria-label="Text input with dropdown button" placeholder="0000-0000-0000" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" />
                      <button className="btn btn-outline dropdown-toggle" type="button">Mobile</button>
                    </div>
                    <a href="#" className="text-theme">
                      + Add another number
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="add-user__info">
                    <div className="add-user__top">
                      <h2>Team</h2>
                    </div>
                    <div className="input__group mb-28">
                      <label htmlFor="team">Select Team</label>
                      <input type="text" id="team" placeholder="Enter team name" />
                    </div>
                    <div className="input__group">
                      <label>Distribute swag</label>
                      <select>
                        <option value="">Limited Sending - Order Need Approval</option>
                      </select>
                    </div>
                    <div className="input__switch mt-50">
                      <div className="form-check form-switch">
                        <label className="form-check-label">Permission to Manage Users</label>
                        <input className="form-check-input" type="checkbox" role="switch" />
                      </div>
                      <p>Will we be putting one of each product into a pack for you?</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="add-user__button">
              <a href="#" className="btn btn-theme">
                <img src="/images/icons/add.svg" alt="" />
                <span>Add user</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddUserForm;
