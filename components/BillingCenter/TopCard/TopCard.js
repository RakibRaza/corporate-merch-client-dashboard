
const TopCard = () => {
  return (
    <section className="billing-center__status">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color1">
                <div className="status-title-icon">
                  <img src="/images/icons/status/dollar-circle.png" alt="" />
                </div>
                <h2 className="status-title">Total Paid</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">$12K</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" alt="" />
                    </span>
                  </li>
                  <li>
                    <span>1.4%</span>
                  </li>
                  <li>
                    <span>+$5 this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color5">
                <div className="status-title-icon">
                  <img src="/images/icons/status/money-recive.png" alt="" />
                </div>
                <h2 className="status-title">Outstanding payment</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">
                  $5.7K
                  <a href="#" className="status-data-theme"> Pay Now <img src="/images/icons/login.svg" alt="" /></a>
                </h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" alt="" />
                    </span>
                  </li>
                  <li>
                    <span>1.4%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color4">
                <div className="status-title-icon">
                  <img src="/images/icons/status/4.svg" alt="" />
                </div>
                <h2 className="status-title">Shipping Cost</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">
                  $20
                  <span> /Order</span>
                </h2>
                <ul className="status-text status-text-down">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status/status-down.png" alt="" />
                    </span>
                  </li>
                  <li>
                    <span className="text-down">4.5%</span>
                  </li>
                  <li>
                    <span>+$5 this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color4">
                <div className="status-title-icon">
                  <img src="/images/icons/status/4.svg" alt="" />
                </div>
                <h2 className="status-title">Notecard cost</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">
                  $05K
                  <span> /Order</span>
                </h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" alt="" />
                    </span>
                  </li>
                  <li>
                    <span>1.4%</span>
                  </li>
                  <li>
                    <span>+$5K this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopCard;
