import ShipmentsChart from "./ShipmentsChart";

const Shipments = () => {
  return (
    <div className="col-md-8">
      <div className="content__box">
        <div className="content__box__top">
          <div className="content__box__top__left">
            <h3>Shipments</h3>
            <h2>320</h2>
          </div>
          <div className="content__box__top__right">
            <div className="input-group">
              <label>Show:</label>
              <select>
                <option value="this-week">This Week</option>
                <option value="previous-week">Previous Week</option>
                <option value="next-week">Next Week</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content__box__body">
          <ShipmentsChart />
        </div>
        <div className="shipment-weekly-chart__legend">
          <div className="shipment-weekly-chart__info">
            <a href="#">
              <img src="/images/icons/info.svg" alt="" />
            </a>
          </div>
          <ul>
            <li>
              <div className="shipment__legend__item">
                <h2 className="legend__title skipped">Pending</h2>
              </div>
            </li>
            <li>
              <div className="shipment__legend__item">
                <h2 className="legend__title pending">Send</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Shipments;
