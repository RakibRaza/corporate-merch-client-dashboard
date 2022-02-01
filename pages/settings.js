import { Tabs, Tab } from "react-bootstrap";
import Password from "../components/Settings/Password/Password";

const Settings = () => {

  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Settings</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="settings__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="settings__content">
                <Tabs defaultActiveKey="password" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="profile" title="Profile">
                  </Tab>
                  <Tab eventKey="password" title="Password">
                    <Password />
                  </Tab>
                  <Tab eventKey="account-data" title="Account & Data" >
                  </Tab>
                  <Tab eventKey="payment-method" title="Payment Method" >
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

export default Settings;
