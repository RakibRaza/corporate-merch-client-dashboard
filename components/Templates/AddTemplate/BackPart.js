
const BackPart = () => {
  return (
    <div className="col-md-6">
      <div className="template-add__info">
        <div className="template-add__top">
          <h2>Backpart</h2>
          <div className="edit-backpart">
            <div className="edit-backpart__top">
              <input type="file" id="logo" />
              <label htmlFor="logo">
                <span className="label-img"><img src="/images/icons/upload-img.png" alt="" /></span>
                <span className="label-text">Browse Logo..</span>
              </label>
            </div>
          </div>
        </div>
        <div className="template-add__upload">
          <span className="upload-icon">
            <label htmlFor="upload">
              <img src="/images/icons/upload-img.svg" alt="" />
            </label>
          </span>
          <span className="upload-link">
            Drag and Drop or <label htmlFor="upload"> Browse </label>
            <input type="file" id="upload" /> to upload (max 20M)
          </span>
        </div>
        <div className="template-add__buttons">
          <ul>
            <li>
              <a href="#">
                <img src="/images/icons/rotate_left.svg" alt="" />
                <span>Rotate Left</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/icons/rotate_right.svg" alt="" />
                <span>Rotate Right</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/icons/remove_icon.svg" alt="" />
                <span>Remove Image</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="template-add__save">
          <a href="#" className="btn btn-theme w-100">
            Save Template
          </a>
        </div>
      </div>
    </div>
  )
}

export default BackPart;
