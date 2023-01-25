import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <div className="about-dark-theme-container">
            <Navbar />
            <div className="about-dark-theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="theme-image"
                alt="not found"
              />
              <h1 className="dark-theme-heading">Lost Your Way?</h1>
              <p>We cannot seem to find the page you are looking for.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="about-light-theme-container">
            <div className="about-light-theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="theme-image"
                alt="light"
              />
              <h1 className="light-theme-heading">Lost Your Way?</h1>
              <p>We cannot seem to find the page you are looking for.</p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
