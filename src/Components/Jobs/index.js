import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import Profile from '../Profile'
import EmploymentType from '../EmploymentType'
import SalaryRange from '../SalaryRange'
import JobItems from '../JobItems'

import {
  MainBgContainer,
  SmInput,
  IconStyle,
  InputStyle,
  EmploymentTypes,
  ProfileHr,
  JobItemDiv,
} from './StyledComponents'

const profileStatus = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    profile: {},
    empType: [],
    salary: '',
    dummyRole: '',
    roles: '',
    profileApiStatus: profileStatus.initial,
  }

  componentDidMount = () => {
    this.getProfile()
  }

  getProfile = async () => {
    this.setState({profileApiStatus: profileStatus.progress})
    const jwtToken = Cookies.get('Token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(response.ok)

      if (response.ok) {
        const updatedData = {
          name: data.profile_details.name,
          image: data.profile_details.profile_image_url,
          bio: data.profile_details.short_bio,
        }
        this.setState({
          profile: updatedData,
          profileApiStatus: profileStatus.success,
        })
      } else {
        this.setState({profileApiStatus: profileStatus.failure})
      }
    } catch (e) {
      this.setState({profileApiStatus: profileStatus.failure})
    }
  }

  inputValueRecive = value => {
    this.setState(prevState => ({empType: [...prevState.empType, value]}))
  }

  inputValueRemove = value => {
    const {empType} = this.state
    const removed = empType.filter(each => value !== each)
    this.setState({empType: removed})
  }

  changeTheRadio = value => {
    this.setState({salary: value})
  }

  searchEngine = event => {
    this.setState({dummyRole: event.target.value})
  }

  search = () => {
    const {dummyRole} = this.state
    this.setState({roles: dummyRole})
  }

  profileRetry = () => {
    this.getProfile()
  }

  renderProgress = () => (
    <div
      className="loader-container"
      data-testid="loader"
      style={{padding: '28px'}}
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccess = () => {
    const {profile} = this.state
    return <Profile value={profile} />
  }

  renderFailure = () => (
    <div style={{margin: '24px'}}>
      <button
        type="button"
        style={{
          backgroundColor: '#6366f1',
          color: '#ffffff',
          border: '0px',
          width: '100px',
          height: '32px',
          borderType: 'solid',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={this.profileRetry}
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {empType, salary, roles, profileApiStatus} = this.state
    const {value1, value2} = this.props
    console.log(value1)
    let content

    switch (profileApiStatus) {
      case profileStatus.progress:
        content = this.renderProgress()
        break
      case profileStatus.success:
        content = this.renderSuccess()
        break
      case profileStatus.failure:
        content = this.renderFailure()
        break
      default:
        break
    }

    return (
      <>
        <Header />
        <MainBgContainer>
          <div>
            <InputStyle>
              <SmInput
                type="text"
                placeholder="search"
                onChange={this.searchEngine}
                style={{color: '#ffffff'}}
              />
              <IconStyle>
                <BsSearch onClick={this.search} />
              </IconStyle>
            </InputStyle>
            {content}
            <EmploymentTypes>Type of employment</EmploymentTypes>
            <ul style={{padding: '0', margin: '0'}}>
              {value1.map(each => (
                <EmploymentType
                  key={each.employmentTypeId}
                  values={each}
                  inputValueRecive={this.inputValueRecive}
                  inputValueRemove={this.inputValueRemove}
                />
              ))}
            </ul>
            <ProfileHr />
            <EmploymentTypes>Salary Range</EmploymentTypes>
            <ul style={{padding: '0', margin: '0'}}>
              {value2.map(each => (
                <SalaryRange
                  key={each.salaryRangeId}
                  values1={each}
                  changeTheRadio={this.changeTheRadio}
                />
              ))}
            </ul>
          </div>
          <JobItemDiv>
            <JobItems empType={empType} salary={salary} roles={roles} />
          </JobItemDiv>
        </MainBgContainer>
      </>
    )
  }
}

export default Jobs
