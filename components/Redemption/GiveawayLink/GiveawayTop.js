import Link from 'next/link';
import { FaSave } from "react-icons/fa";

const GiveawayTop = () => {
  return (
    <div className="section__header__area redemption-new-giveway__area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <div className="redemption-new-giveway__header">
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/redemption">
                          <a> Redemption</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Create New Giveway Link
                      </li>
                    </ul>
                  </nav>
                  <h2>Giveaway Link Name</h2>
                </div>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <Link href="/redemption">
                    <a className="btn btn-add">
                      <FaSave />
                      <span>Save Changes</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveawayTop;
