import Link from 'next/link';
import AddUserForm from "../../../components/Teams/AddUser/AddUserForm";

const AddUser = () => {
  return (
    <div className="main-content">
      <div className="section__header__area client-manage-order">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="client-order-details__header">
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/teams/user-management">
                        <a>User Management</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add User
                    </li>
                  </ul>
                </nav>
                <h2>Add User</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddUserForm />
    </div>
  )
}

export default AddUser;
