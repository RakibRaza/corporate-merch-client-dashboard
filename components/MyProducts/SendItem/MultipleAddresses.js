
const MultipleAddresses = () => {
  return (
    <div className="multiple__address">
      <div className="multiple__address__body">
        <div className="row">
          <div className="col-md-8">
            <div className="multiple__address__step">
              <p>Step 01</p>
              <h2>Download our template below</h2>
              <div className="multiple__address__step__input">
                <label htmlFor="download-template">
                  <span className="label-img"><img src="/images/icons/u_download-alt.svg" alt="" /></span>
                  <span className="label-text">Download Template</span>
                </label>
                <input type="file" id="download-template" />
              </div>
            </div>
            <div className="multiple__address__step">
              <p>Step 02</p>
              <h2>Upload the addresses spreadsheet</h2>
              <div className="multiple__address__step__input">
                <label htmlFor="upload-file">
                  <span className="label-img"><img src="/images/icons/u_upload-alt.svg" alt="" /></span>
                  <span className="label-text">Upload Spreadsheet File</span>
                </label>
                <input type="file" id="upload-file" />
              </div>
            </div>
            <div className="multiple__address__step">
              <p>Step 03</p>
              <h2>Confirm inputs mapping and make sure they match your inputs</h2>
              <div className="multiple__address__step__input">
                <label htmlFor="confirm">
                  <span className="label-img"><img src="/images/icons/Apps.svg" alt="" /></span>
                  <span className="label-text">Confirm Field Mapping</span>
                </label>
                <input type="file" id="confirm" />
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
            <div className="edit-frontpart">
              <div className="edit-frontpart__top">
                <input type="file" id="logo" />
                <label htmlFor="logo">
                  <span className="label-img"><img src="/images/icons/upload-img.png" alt="" /></span>
                  <span className="label-text">Browse Logo..</span>
                </label>
              </div>
              <div className="edit-frontpart__bottom">
                <a href="#" className="btn btn-black w-100"> Edit Frontpart </a>
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

export default MultipleAddresses;
