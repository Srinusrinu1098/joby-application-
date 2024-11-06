import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMdHome} from 'react-icons/io'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {
  NavBar,
  LogoImage,
  NavItems,
  HomeAndJob,
  HomeEl,
  JobEl,
  ButtonEl,
} from './StyledComponents'

const Header = props => {
  const logout = () => {
    Cookies.remove('Token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NavBar>
      <Link to="/" style={{textDecoration: 'none', color: '#ffffff'}}>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>

      <NavItems>
        <Link to="/" style={{textDecoration: 'none', color: '#ffffff'}}>
          <IoMdHome />
        </Link>
        <Link to="/jobs" style={{textDecoration: 'none', color: '#ffffff'}}>
          <BsFillBriefcaseFill />
        </Link>

        <FiLogOut onClick={logout} style={{cursor: 'pointer'}} />
      </NavItems>
      <HomeAndJob>
        <Link to="/" style={{textDecoration: 'none'}}>
          <HomeEl>Home</HomeEl>
        </Link>
        <Link to="/jobs" style={{textDecoration: 'none'}}>
          <JobEl>Jobs</JobEl>
        </Link>
      </HomeAndJob>

      <ButtonEl onClick={logout}>Logout</ButtonEl>
    </NavBar>
  )
}

export default withRouter(Header)
