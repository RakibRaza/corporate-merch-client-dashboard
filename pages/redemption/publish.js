import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GiveawaySteps from "../../components/Redemption/GiveawayLink/GiveawaySteps";
import GiveawayTop from "../../components/Redemption/GiveawayLink/GiveawayTop";

const Publish = () => {
  return (
    <div className="main-content">
      <GiveawayTop />

      <section className="giveway__steps">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="giveway__steps__area">
                <GiveawaySteps />
                <fieldset>
                  <div className="giveway__steps__item">
                    <div className="giveway__steps__item__content publish">
                      <div className="publish__left">
                        <div className="publish__top mb-23">
                          <h2>Secuirity</h2>
                          <h3>Our systeme only allows a recipient to claim the giveway once. No duplicates are allowed.</h3>
                        </div>
                        <div className="input__group mb-23">
                          <label>Link option</label>
                          <select>
                            <option value="">Open Link</option>
                            <option value="">Open Link</option>
                          </select>
                          <p>Link will always stay open</p>
                        </div>
                        <div className="input__group">
                          <label>Allow emails ending with <span>(Optionsl)</span></label>
                          <select>
                            <option value="">@corporatemarch.com</option>
                            <option value="">@corporatemarch.com</option>
                          </select>
                          <p>Only emails ending with the indicated text will be allowwed to submit the giveway form</p>
                        </div>
                      </div>
                      <div className="publish__right">
                        <div className="publish__top mb-41">
                          <h2>Data Collection</h2>
                          <h3>Select which recipient data you want to collect.</h3>
                        </div>
                        <div className="input__switch mb-24">
                          <div className="form-check form-switch">
                            <label className="form-check-label">Phone nubmer</label>
                            <input className="form-check-input" type="checkbox" role="switch" />
                          </div>
                          <p>Will be collecting the number they put</p>
                        </div>
                        <div className="input__switch mb-20">
                          <div className="form-check form-switch">
                            <label className="form-check-label">Company name</label>
                            <input className="form-check-input" type="checkbox" role="switch" />
                          </div>
                          <p>Will be collecting the Company name they put</p>
                        </div>
                        <div className="input__switch">
                          <div className="form-check form-switch">
                            <label className="form-check-label">Department</label>
                            <input className="form-check-input" type="checkbox" role="switch" />
                          </div>
                          <p>Will be collecting the Department they put</p>
                        </div>
                      </div>
                    </div>
                    <div className="generate-link">
                      <label htmlFor="new-link">Generate Link</label>
                      <div className="input-copy">
                        <input type="text" defaultValue="https://www.corporatemerch.com/user/generate/link/77a321d5-226c-4500-8c2d-acdcd76f587f" />
                        <div className="input-copy-overlay">
                          <img src="/images/icons/copy.svg" alt="" />
                        </div>
                      </div>
                      <p>Copy this link to share the gift you want to give for the giveway</p>
                    </div>
                    <div className="publish__buttons">
                      <Link href="/redemption/customize">
                        <a className="btn btn-outline-theme"> <FaArrowLeft /> <span> Back </span> </a>
                      </Link>
                      <Link href="/redemption">
                        <a className="btn btn-theme"> Publishi link <span> <FaArrowRight /> </span> </a>
                      </Link>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publish;
