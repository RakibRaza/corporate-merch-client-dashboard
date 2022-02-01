import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GiveawaySteps from "../../components/Redemption/GiveawayLink/GiveawaySteps";
import GiveawayTop from "../../components/Redemption/GiveawayLink/GiveawayTop";

const customize = () => {
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
                    <div className="giveway__steps__item__title">
                      <h2>Preview</h2>
                    </div>
                    <div className="giveway__steps__item__content">
                      <div className="preview-part">
                        <div className="preview-part__img">
                          <img src="/images/preview-logo.png" alt="" />
                        </div>
                        <div className="preview-part__text">
                          <h2>Your special giveway awaits you!</h2>
                          <p>Hi Kim, These bags came out awesome! Simply open the giveaway and enter in your address. We will have this shipped out today!</p>
                        </div>
                        <div className="preview-part__button">
                          <a href="#" className="btn btn-theme">
                            Go to giveway page
                            <span>
                              <i className="fa fa-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="preview__bottom">
                      <div className="preview__bottom__left">
                        <div className="add-logo">
                          <div className="add-logo__top">
                            <h2>Add Logo</h2>
                            <a className="text-theme" href="#">Remove</a>
                          </div>
                          <div className="add-logo__img">
                            <label htmlFor="logo">
                              <img src="/images/preview-logo-2.png" alt="" />
                            </label>
                            <input type="file" id="logo" />
                          </div>
                          <div className="progress add-logo__progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div className="add-color">
                          <div className="add-color__item">
                            <label>Background</label>
                            <input type="color" defaultValue="#FCFCFC" />
                          </div>
                          <div className="add-color__item">
                            <label>Button Color</label>
                            <input type="color" defaultValue="#55B4E4" />
                          </div>
                          <div className="add-color__item">
                            <label>Title Color</label>
                            <input type="color" defaultValue="#11142D" />
                          </div>
                          <div className="add-color__item">
                            <label>Message Text Color</label>
                            <input type="color" defaultValue="#A6A6A6" />
                          </div>
                        </div>
                      </div>
                      <div className="preview__bottom__right">
                        <Link href="/redemption/giveaway-details">
                          <a className="btn btn-outline-theme" > <FaArrowLeft /> <span> Back </span> </a>
                        </Link>
                        <Link href="/redemption/publish">
                          <a className="btn btn-theme"> Next <span> <FaArrowRight /> </span> </a>
                        </Link>
                      </div>
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

export default customize;
