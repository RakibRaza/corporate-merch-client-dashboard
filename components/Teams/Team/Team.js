
const Team = () => {
  return (
    <section className="team-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="team__item">
              <div className="team__item__top">
                <div className="team__item__top__left">
                  <div className="team__item__img">
                    <img src="/images/teams/team-1.png" alt="" />
                  </div>
                </div>
                <div className="team__item__top__right">
                  <div className="team__item__top__text">
                    <h2>New York - HR</h2>
                    <h3 className="total-product">2 Products</h3>
                  </div>
                  <div className="overlay">
                    <a href="#">
                      <img src="/images/icons/trash.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__item__bottom">
                <div className="team__item__bottom__left">
                  <h2>
                    Current User: <a className="current-user" href="#">42</a>
                    <span>
                      <img src="/images/icons/connect.svg" alt="" />
                    </span>
                  </h2>
                </div>
                <div className="team__item__bottom__right">
                  <a href="#" className="btn btn-theme">
                    Edit Team
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="team__item">
              <div className="team__item__top">
                <div className="team__item__top__left">
                  <div className="team__item__img">
                    <img src="/images/teams/team-2.png" alt="" />
                  </div>
                </div>
                <div className="team__item__top__right">
                  <div className="team__item__top__text">
                    <h2>New York - Sales</h2>
                    <h3 className="total-product">40 Products</h3>
                  </div>
                  <div className="overlay">
                    <a href="#">
                      <img src="/images/icons/trash.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team__item__bottom">
                <div className="team__item__bottom__left">
                  <h2>
                    Current User: <a className="current-user" href="#">53</a>
                  </h2>
                </div>
                <div className="team__item__bottom__right">
                  <a href="#" className="btn btn-theme">
                    Edit Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;
