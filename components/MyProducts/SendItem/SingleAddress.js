import { FaPlus } from "react-icons/fa";

const SingleAddress = () => {
  return (
    <div className="single__address">
      <div className="single__address__top">
        <div className="single__address__top__left">
          <label>Select Contact:</label>
          <select>
            <option value="clarence-manning">Clarence Manning</option>
          </select>
        </div>
        <div className="single__address__top__right">
          <a href="#" className="btn btn-theme">
            <FaPlus />
            <span> Add New Contacts</span>
          </a>
        </div>
      </div>
      <div className="single__address__body">
        <div className="row">
          <div className="col-md-8">
            <div className="single__address__body__top">
              <div className="input__group__between">
                <div className="input__group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="Fisrt Name" />
                </div>
                <div className="input__group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Last Name" />
                </div>
              </div>
              <div className="input__group">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" placeholder="eg. sthepen@email.com" />
              </div>
            </div>
            <div className="input__location">
              <div className="input__group">
                <label>Location</label>
              </div>
              <div className="input__group mb-12">
                <select>
                  <option value="">Select Country</option>
                  <option value="ban">Bangladesh</option>
                </select>
              </div>
              <div className="input__group mb-12">
                <select>
                  <option value="">Select City</option>
                  <option value="dhaka">Dhaka</option>
                </select>
              </div>
              <div className="input__group__between">
                <div className="input__group mb-12">
                  <select>
                    <option value="">State</option>
                    <option value="dhaka">Dhaka</option>
                  </select>
                </div>
                <div className="input__group">
                  <input type="text" placeholder="ZIP Code" />
                </div>
              </div>
              <div className="input__group mb-12">
                <label htmlFor="address-line-1">Address line</label>
                <textarea id="address-line-1" cols="30" rows="3" placeholder="Address line 1"></textarea>
              </div>
              <div className="input__group">
                <a href="#" className="add-address-line">  + Add Address line 2 </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input__group input__right">
              <label>Notecard Template</label>
              <select>
                <option value="">Select Template</option>
                <option value="template-1">Template 1</option>
                <option value="template-2">Template 2</option>
                <option value="template-3">Template 3</option>
              </select>
            </div>
            <div className="edit-backpart">
              <div className="edit-backpart__top">
                <input type="text" placeholder="Header Text" />
                <p>
                  Type your note here. You can see a live

                  preview on your card on the left.
                </p>
              </div>
              <div className="edit-backpart__bottom">
                <a href="#" className="btn btn-black w-100"> Edit Backpart </a>
              </div>
            </div>
            <div className="input__group">
              <a href="#" className="btn btn-theme w-100"> Send Swag </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleAddress;
