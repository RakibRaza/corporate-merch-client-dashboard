import ShopifyTable from "../components/Shopify/ShopifyTable/ShopifyTable";

const Shopify = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Connect Shopify</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShopifyTable />
    </div>
  )
}

export default Shopify;
