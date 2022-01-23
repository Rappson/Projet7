/* connection components */
import Header from '../components/connect-components/Header';
import Welcome from '../components/connect-components/Welcome';
import SignIn from '../components/connect-components/sign';
import Footer from '../components/connect-components/Footer';



function connectPage() {
    return (
      <div>
        <Header />
        <Welcome />
        <SignIn />
        <Footer />
      </div>
    )
  }

export default connectPage;