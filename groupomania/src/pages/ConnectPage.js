/* connection components */
import Header from '../components/connect-components/connect-header';
import Welcome from '../components/connect-components/Welcome';
import SignIn from '../components/connect-components/sign';
import Footer from '../components/connect-components/Footer';
import "../style/index.css"




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