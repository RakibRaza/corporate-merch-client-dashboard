
const TopCard = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="status-box status-shipment">
              <div className="status-icon">
                <img src="/images/icons/status/1.png" alt="" />
              </div>
              <div className="status-content">
                <h3 className="status-text">Total Shipments</h3>
                <h2 className="status-data">12</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status-box status-order">
              <div className="status-icon">
                <img src="/images/icons/status/2.png" alt="" />
              </div>
              <div className="status-content">
                <h3 className="status-text">Pending Order</h3>
                <h2 className="status-data">05</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status-box status-redemption">
              <div className="status-icon">
                <img src="/images/icons/status/3.png" alt="" />
              </div>
              <div className="status-content">
                <h3 className="status-text">Redemption</h3>
                <h2 className="status-data">05</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status-box status-sent">
              <div className="status-icon">
                <img src="/images/icons/status/4.png" alt="" />
              </div>
              <div className="status-content">
                <h3 className="status-text">Total Sent</h3>
                <h2 className="status-data">05</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCard;
