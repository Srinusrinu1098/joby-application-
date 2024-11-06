import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginCon,
  LogCon,
  Logo,
  LabelUser,
  UserInput,
  ButtonLog,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  usernameInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  renderSuccess = jwtToken => {
    Cookies.set('Token', jwtToken, {expires: 5})
    const {history} = this.props
    history.replace('/')
  }

  renderFailure = error => {
    this.setState({errorMsg: error})
  }

  submitLogin = async event => {
    const {username, password} = this.state
    event.preventDefault()

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.renderSuccess(data.jwt_token)
      console.log(data)
    } else if (response.status === 400) {
      this.renderFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg} = this.state
    return (
      <LoginCon onSubmit={this.submitLogin}>
        <LogCon>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <LabelUser htmlFor="username">Username</LabelUser>
          <UserInput
            id="username"
            type="text"
            placeholder="Username"
            onChange={this.usernameInput}
          />
          <LabelUser htmlFor="password">Password</LabelUser>
          <UserInput
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.passwordInput}
          />
          <ButtonLog type="submit">Login</ButtonLog>
          {errorMsg.length !== 0 && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </LogCon>
      </LoginCon>
    )
  }
}
export default Login
