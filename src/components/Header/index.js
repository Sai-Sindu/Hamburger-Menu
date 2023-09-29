// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="nav-header-card">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="container">
      <Popup
        modal
        trigger={
          <button
            className="menu-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal-card">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size="30" color="#616e7c" />
              </button>
            </div>
            <ul>
              <li className="card">
                <Link to="/" className="link-text" onClick={() => close()}>
                  <AiFillHome className="icon-img" />
                  <p className="nav-link-text">Home</p>
                </Link>
              </li>
              <li className="card">
                <Link to="/about" className="link-text" onClick={() => close()}>
                  <BsInfoCircleFill className="icon-img" />
                  <p className="nav-link-text">About</p>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
