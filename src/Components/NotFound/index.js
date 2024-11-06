import {NotFoundContainer} from './StyledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      style={{maxWidth: '200px'}}
    />
    <h1 style={{fontSize: '14px'}}>Page Not Found</h1>
    <p style={{fontSize: '14px', textAlign: 'center'}}>
      We are sorry, the page you requested could not be found
    </p>
  </NotFoundContainer>
)
export default NotFound
