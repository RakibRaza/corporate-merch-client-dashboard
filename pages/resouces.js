import { Accordion } from "react-bootstrap";
import FAQ from "../components/Resouces/FAQ";
import Queries from "../components/Resouces/Queries";

const Resouces = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Resouses</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="resouses">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="resouses__content">
                <Accordion defaultActiveKey="0">
                  <Queries />
                  <FAQ />
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resouces;
