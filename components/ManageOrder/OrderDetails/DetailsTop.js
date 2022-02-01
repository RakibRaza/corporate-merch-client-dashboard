import Link from 'next/link';

const DetailsTop = () => {
  return (
    <div className="section__header__area client-manage-order">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="client-order-details__header">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/client/manage-order">
                      <a>Manage Orders</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    View Details
                  </li>
                </ul>
              </nav>
              <h2>Order #CM-101</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsTop;
