
import Sidebar from '../components/Account/Sidebar';
import SignUPForm from '../components/Account/SignUPForm';

const SignUp = () => {

  return (
    <section className="accout__area">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <SignUPForm />
        </div>
      </div>
    </section>
  )
}

export default SignUp;

SignUp.getLayout = function PageLayout(page) {
  return (
    <>{page}</>
  )
}