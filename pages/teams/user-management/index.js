import Link from 'next/link';
import UserTable from "../../../components/Teams/UserManagement/UserTable";

const UserManagement = () => {
  return (
    <div className="main-content">
      <div className="section__header__area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section__top">
                <div className="section__top__left">
                  <h2 className="title-32">User Management</h2>
                </div>
                <div className="section__top__right">
                  <div className="section__top__right__item">
                    <Link href="/teams/user-management/add-user">
                      <a className="btn btn-add">
                        <img src="/images/icons/add.svg" alt="" />
                        <span>Add User</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserTable />
    </div>
  )
}

export default UserManagement;
