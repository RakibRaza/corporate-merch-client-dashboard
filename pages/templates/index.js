import Link from 'next/link';
import Template from "../../components/Templates/Template/Template";

const Templates = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">Template</h2>
                </div>
                <div className="section__top__right">
                  <div className="section__top__right__item">
                    <Link href="/templates/add-new-template">
                      <a className="btn btn-add" >
                        <img src="/images/icons/add.svg" alt="" />
                        <span> Add New Template</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Template />
    </div>
  )
}

export default Templates;
