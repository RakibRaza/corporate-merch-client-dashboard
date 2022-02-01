import { FaSearch } from "react-icons/fa";

const ShipmentTop = () => {
  return (
    <div className="section__header__area client-shipment">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title-32">Shipments</h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <form className="bg-item" action="" method="post">
                    <input type="search" name="search" id="search" placeholder="Search Product, name.." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShipmentTop;
