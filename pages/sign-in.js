
import Sidebar from '../components/Account/Sidebar';
import SignInForm from '../components/Account/SignInForm';

const SignIn = () => {

  return (
    <section className="accout__area">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <SignInForm />
        </div>
      </div>
    </section>
  )
}

export default SignIn;

SignIn.getLayout = function PageLayout(page) {
  return (
    <>{page}</>
  )
}
