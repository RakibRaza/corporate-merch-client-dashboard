import { FaSearch } from 'react-icons/fa';

const ContactsTop = () => {
  return (
    <div className="section__header__area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title-32">Contacts</h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <form className="bg-item">
                    <input type="search" placeholder="Search Products.." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <button className="btn btn-add">
                    <img src="/images/icons/add.svg" alt="" />  Add New Contacts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsTop;
