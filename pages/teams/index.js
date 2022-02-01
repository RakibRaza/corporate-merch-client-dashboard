import Team from "../../components/Teams/Team/Team";

const Teams = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Teams</h2>
                </div>
                <div className="section__top__right">
                  <div className="section__top__right__item">
                    <a className="btn btn-add" href="#">
                      <img src="/images/icons/add.svg" alt="" />
                      <span>Add Teams</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Team />
    </div>
  )
}

export default Teams;
