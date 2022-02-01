import Editor from "./Editor";

const FrontPart = () => {
  return (
    <div className="col-md-6">
      <div className="template-add__info">
        <div className="template-add__top">
          <h2>Frontpart</h2>
          <div className="edit-frontpart">
            <div className="edit-frontpart__top">
              <input type="text" placeholder="Header Text" />
              <p>
                Type your note here. You can see a live

                preview on your card on the left.
              </p>
            </div>
          </div>
        </div>
        <div className="input__group__between mt-36">
          <div className="input__group">
            <label>Font</label>
            <select>
              <option value="meie-script">Meie Script</option>
            </select>
          </div>
          <div className="input__group">
            <label>Text Color</label>
            <select>
              <option value="black">Black</option>
              <option value="green">green</option>
              <option value="red">red</option>
            </select>
          </div>
        </div>
        <div className="info__group mt-14">
          <label>Message Text</label>
          <Editor />
        </div>
      </div>
    </div>
  )
}

export default FrontPart;
