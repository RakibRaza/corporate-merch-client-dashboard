import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GiveawaySteps from "../../components/Redemption/GiveawayLink/GiveawaySteps";
import GiveawayTop from "../../components/Redemption/GiveawayLink/GiveawayTop";

const GiveawayDetails = () => {
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
                      <h2>Givway Details</h2>
                    </div>
                    <div className="giveway__steps__item__content">
                      <div className="input__group">
                        <label htmlFor="msg">Giveway Message</label>
                        <textarea id="msg" cols="30" rows="5" placeholder="Type here.."></textarea>
                      </div>
                      <div className="promotional-video-progress">
                        <div className="promotional-video-progress__left">
                          <h2>Promotional video</h2>
                        </div>
                        <div className="promotional-video-progress__right">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <h2>1 File Uploading...</h2>
                        </div>
                      </div>
                      <div className="promotional-video">
                        <h2>Drag and drop video files</h2>
                        <h3>Show a promotional video on the giveaway page</h3>
                        <div className="upload-file">
                          <label htmlFor="upload-file" className="btn btn-theme">
                            <img src="/images/icons/upload-icon.svg" alt="" />
                            <span> Or choose file</span>
                          </label>
                          <input type="file" id="upload-file" />
                        </div>
                      </div>
                    </div>
                    <div className="giveway__steps__bottom">
                      <div className="giveway__steps__bottom__left">
                        <div className="form-check skip-video-check">
                          <input type="checkbox" className="form-check-input" id="skip-video" />
                          <label className="form-check-label" htmlFor="skip-video">Let recipient skip video</label>
                        </div>
                      </div>
                      <div className="giveway__steps__bottom__right">
                        <Link href="/redemption/select-product">
                          <a className="btn btn-outline-theme"> <FaArrowLeft /> <span> Back </span> </a>
                        </Link>
                        <Link href="/redemption/customize">
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

export default GiveawayDetails;
