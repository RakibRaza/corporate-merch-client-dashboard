import Link from 'next/link';
import BackPart from '../../components/Templates/AddTemplate/BackPart';
import FrontPart from '../../components/Templates/AddTemplate/FrontPart';

const AddNewTemplate = () => {
  return (
    <div className="main-content">
      <div className="section__header__area template-top__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <div className="template-top__header">
                    <nav aria-label="breadcrumb">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/templates">
                            <a>Templates</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Add New Template
                        </li>
                      </ul>
                    </nav>
                    <h2>Template Name</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="template-add__area">
        <div className="container-fluid">
          <div className="row">
            <FrontPart />
            <BackPart />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddNewTemplate;
