import Link from 'next/link';
import { FaSearch } from "react-icons/fa";

const RedemptionTop = () => {
  return (
    <div className="section__header__area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title-32">Redemption</h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <form className="bg-item" >
                    <input type="search" placeholder="Search.." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <Link href="/redemption/select-product">
                    <a className="btn btn-add"> <img src="/images/icons/add.svg" alt="" /> Create New Giveaway Link </a>
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

export default RedemptionTop;
