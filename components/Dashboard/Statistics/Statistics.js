import StatisticsChart from "./StatisticsChart";

const Statistics = () => {
  return (
    <div className="col-md-4">
      <div className="content__box">
        <div className="content__box__top">
          <div className="content__box__top__left">
            <h3>Statistics</h3>
          </div>
          <div className="content__box__top__right">
            <span className="badge-total">Total</span>
          </div>
        </div>
        <div className="content__box__body">
          <StatisticsChart />
          <div className="shipment-chart__legend">
            <ul className="shipment__legend">
              <li>
                <div className="shipment__legend__item">
                  <h2 className="legend__title skipped">Skipped</h2>
                  <p className="legend__data">5,526</p>
                </div>
              </li>
              <li>
                <div className="shipment__legend__item">
                  <h2 className="legend__title pending">Pending Order</h2>
                  <p className="legend__data">182</p>
                </div>
              </li>
              <li>
                <div className="shipment__legend__item">
                  <h2 className="legend__title processing">Processing</h2>
                  <p className="legend__data">276</p>
                </div>
              </li>
              <li>
                <div className="shipment__legend__item">
                  <h2 className="legend__title on-cart">On Cart</h2>
                  <p className="legend__data">284</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics;
