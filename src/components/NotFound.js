import '../css/notfound.css';
import Header from './Header';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';
import crack from '../assets/svg/crack.svg'

function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found d-flex justify-content-center">
        <img src={crack} alt="svg" />
        <div className="d-flex flex-column align-items-center align-self-center">
          <h1>404</h1>
          <h4 className="tag">page not found</h4>
          <p>Oops! The page you were looking for doesn't exist.</p>
          <div className="d-flex flex-column align-items-center align-content-center">
            <span>Let's get you back ...</span>
            <HashLink to="/#" className="home-btn text-center curtain">Home</HashLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
