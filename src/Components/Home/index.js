import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MainContainer, Heading, Paragraph, Button} from './StyledComponents'
import Header from '../Header'

class Home extends Component {
  findJobs = () => {
    const {history} = this.props
    const jwtToken = Cookies.get('Token')
    if (jwtToken !== undefined) {
      history.replace('/jobs')
    }
  }

  render() {
    const jwtToken = Cookies.get('Token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <MainContainer>
          <Heading>Find The Job That Fits Your Life</Heading>
          <Paragraph>
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </Paragraph>
          <Button onClick={this.findJobs}>Find jobs</Button>
        </MainContainer>
      </>
    )
  }
}

export default Home
