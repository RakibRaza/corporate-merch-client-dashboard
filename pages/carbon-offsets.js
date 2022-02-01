import CarbonTable from "../components/CarbonOffsets/CarbonTable/CarbonTable";

const CarbonOffsets = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Carbon Offset</h2>
                </div>
                <div className="section__top__right">
                  <div className="content__right__item">
                    <a href="#" className="btn btn-white">
                      <img src="/images/icons/filter_list.svg" alt="" />
                      <span>Filter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CarbonTable />
    </div>
  )
}

export default CarbonOffsets;
