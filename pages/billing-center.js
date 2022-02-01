import BillTable from "../components/BillingCenter/BillTable/BillTable";
import TopCard from "../components/BillingCenter/TopCard/TopCard";

const BillingCenter = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Billing Center</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopCard />
      <BillTable />
    </div>
  )
}

export default BillingCenter;
