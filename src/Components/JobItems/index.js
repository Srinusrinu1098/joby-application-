import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import JobItemsDisplay from '../JobItemsDisplay'

import {
  SmInput,
  IconStyle,
  InputStyle,
  NoJobsDisplay,
  NoJobsDisplayImg,
} from './StyledComponents'

const apiStatusOfAll = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItems extends Component {
  state = {
    jobList: [],
    newFiltered: [],
    newSalary: '',
    role: '',
    dum: '',
    apiStatus: apiStatusOfAll.initial,
  }

  componentDidMount() {
    this.getAllJobs()
  }

  componentDidUpdate(prevProps) {
    const {empType, salary, roles} = this.props
    if (prevProps.empType !== empType) {
      this.setState({newFiltered: empType}, this.getAllJobs)
    } else if (prevProps.salary !== salary) {
      this.setState({newSalary: salary}, this.getAllJobs)
    } else if (prevProps.roles !== roles) {
      this.setState({role: roles}, this.getAllJobs)
    }
  }

  getAllJobs = async () => {
    this.setState({apiStatus: apiStatusOfAll.progress})
    const {newFiltered, newSalary, role} = this.state
    const Filtered = newFiltered.join()
    console.log(Filtered)

    const jwtToken = Cookies.get('Token')
    const url = `https://apis.ccbp.in/jobs?employment_type=${Filtered}&minimum_package=${newSalary}&search=${role}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        const updatedList = data.jobs.map(each => ({
          id: each.id,
          rating: each.rating,
          title: each.title,
          location: each.location,
          companyImage: each.company_logo_url,
          employmentType: each.employment_type,
          packages: each.package_per_annum,
          description: each.job_description,
        }))
        this.setState({
          jobList: updatedList,
          apiStatus: apiStatusOfAll.success,
        })
      } else {
        this.setState({apiStatus: apiStatusOfAll.failure})
      }
    } catch (e) {
      this.setState({apiStatus: apiStatusOfAll.failure})
    }
  }

  searchEngines = event => {
    this.setState({dum: event.target.value})
  }

  searchs = () => {
    const {dum} = this.state
    this.setState({role: dum}, this.getAllJobs)
  }

  renderProgresss = () => (
    <div
      className="loader-container"
      data-testid="loader"
      style={{paddingLeft: '388px', paddingTop: '250px'}}
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  retryButton = () => {
    this.getAllJobs()
  }

  renderSuccesss = () => {
    const {jobList} = this.state
    return (
      <ul
        style={{
          padding: '0',
          margin: '0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {jobList.map(each => (
          <JobItemsDisplay key={each.id} value={each} />
        ))}
      </ul>
    )
  }

  renderFailures = () => (
    <div
      style={{
        paddingLeft: '10px',
        color: '#ffffff',
        textAlign: 'center',
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        style={{minWidth: '40px', maxWidth: '200px'}}
      />
      <h1 style={{fontSize: '14px'}}>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <div>
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
          onClick={this.retryButton}
        >
          Retry
        </button>
      </div>
    </div>
  )

  render() {
    const {jobList, apiStatus} = this.state
    let content

    switch (apiStatus) {
      case apiStatusOfAll.progress:
        content = this.renderProgresss()
        break
      case apiStatusOfAll.success:
        content = this.renderSuccesss()
        break
      case apiStatusOfAll.failure:
        content = this.renderFailures()
        break
      default:
        content = null
    }

    return (
      <div style={{position: 'relative', height: '100vh'}}>
        <InputStyle>
          <SmInput
            type="text"
            placeholder="search"
            onChange={this.searchEngines}
            style={{color: '#ffffff'}}
          />
          <IconStyle>
            <BsSearch onClick={this.searchs} />
          </IconStyle>
        </InputStyle>
        <div
          style={{
            overflowY: 'scroll',
            maxHeight: 'calc(100vh - 50px)',
            scrollbarWidth: 'none',
          }}
        >
          {content}

          {jobList.length === 0 && apiStatus === apiStatusOfAll.success && (
            <NoJobsDisplay>
              <NoJobsDisplayImg
                src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                alt="no jobs"
              />
              <h1 style={{color: '#ffffff', textAlign: 'center', margin: '0'}}>
                No Jobs Found
              </h1>
              <p style={{color: '#ffffff', textAlign: 'center'}}>
                We could not find any jobs. Try other filters.
              </p>
            </NoJobsDisplay>
          )}
        </div>
      </div>
    )
  }
}

export default JobItems
