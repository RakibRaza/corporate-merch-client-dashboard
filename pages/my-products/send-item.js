import { Tabs, Tab } from "react-bootstrap";
import MultipleAddresses from "../../components/MyProducts/SendItem/MultipleAddresses";
import SingleAddress from "../../components/MyProducts/SendItem/SingleAddress";
import SendItemTop from "../../components/MyProducts/TopSection/SendItemTop";

const SendItem = () => {
  return (
    <div className="main-content">
      <SendItemTop />
      <section className="send-item">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="send-item__address">
                <Tabs defaultActiveKey="single-address" className="mb-3">
                  <Tab eventKey="single-address" title="Single Address">
                    <SingleAddress />
                  </Tab>
                  <Tab eventKey="multiple-address" title="Multiple Address">
                    <MultipleAddresses />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SendItem;
