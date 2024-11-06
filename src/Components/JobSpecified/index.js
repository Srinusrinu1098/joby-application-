import {MdLocationOn} from 'react-icons/md'

import {FaStar} from 'react-icons/fa'
import {BsFillBriefcaseFill, BsBoxArrowUpRight} from 'react-icons/bs'
import SimilarJobsSection from '../SimilarJobsSection'

import {
  Listedones,
  ListImg,
  ImgItemFlex,
  TitleAndRating,
  TitleHeading,
  Rating,
  RatingInNumber,
  LocationJobTypePackageCon,
  LocationAndRole,
  LocationCon,
  Location,
  JobTypeCon,
  JobType,
  PackageCon,
  Package,
  DescAndVisitCon,
  VisitCon,
  LifeAtCompany,
  Image,
} from './StyledComponents'

const JobSpecified = props => {
  const {specificJob, lifeAtCompany, skills, similarJobs} = props
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    jobDescription,
    packages,
    location,
    rating,
    title,
  } = specificJob

  return (
    <>
      <Listedones>
        <ImgItemFlex>
          <ListImg src={companyLogoUrl} alt="company logo" />
          <TitleAndRating>
            <TitleHeading>{title}</TitleHeading>
            <Rating>
              <FaStar style={{color: '#fbbf24'}} />
              <RatingInNumber>{rating}</RatingInNumber>
            </Rating>
          </TitleAndRating>
        </ImgItemFlex>
        <LocationJobTypePackageCon>
          <LocationAndRole>
            <LocationCon>
              <MdLocationOn style={{color: '#ffffff'}} />
              <Location>{location}</Location>
            </LocationCon>
            <JobTypeCon>
              <BsFillBriefcaseFill style={{color: '#ffffff'}} />
              <JobType>{employmentType}</JobType>
            </JobTypeCon>
          </LocationAndRole>
          <PackageCon>
            <Package>{packages}</Package>
          </PackageCon>
        </LocationJobTypePackageCon>
        <hr style={{margin: '0', padding: '0'}} />
        <DescAndVisitCon>
          <h1
            style={{
              color: '#ffffff',
              margin: '0',
              fontSize: '12px',
              paddingTop: '8px',
            }}
          >
            Description
          </h1>
          <a
            href={companyWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <VisitCon>
              <p style={{paddingRight: '4px'}}>visit</p>
              <BsBoxArrowUpRight />
            </VisitCon>
          </a>
        </DescAndVisitCon>

        <p style={{color: '#ffffff'}}>{jobDescription}</p>
        <h1
          style={{
            color: '#ffffff',
            margin: '0',
            fontSize: '12px',
            paddingTop: '8px',
          }}
        >
          SKills
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flexStart',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '14px',
          }}
        >
          {skills.map(each => (
            <div
              key={each.toolsName}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginRight: '50px',
                marginBottom: '30px',
                alignItems: 'center',
                maxWidth: '100px',
              }}
            >
              <img
                src={each.image}
                alt={each.toolsName}
                style={{width: '50px'}}
              />
              <p
                style={{color: '#ffffff', fontSize: '8px', paddingLeft: '6px'}}
              >
                {each.toolsName}
              </p>
            </div>
          ))}
        </div>

        <h1
          style={{
            color: '#ffffff',
            margin: '0',
            fontSize: '12px',
            paddingTop: '8px',
          }}
        >
          Life at Company
        </h1>
        <LifeAtCompany>
          <p
            style={{
              color: '#ffffff',
              margin: '0',
              fontSize: '12px',
              paddingTop: '8px',
            }}
          >
            {lifeAtCompany.description}
          </p>

          <Image src={lifeAtCompany.imageUrl} alt="company" />
        </LifeAtCompany>
      </Listedones>

      <div>
        <h1
          style={{
            color: '#ffffff',
            margin: '0',
            fontSize: '12px',
            paddingTop: '8px',
            paddingLeft: '34px',
          }}
        >
          Similar jobs
        </h1>
        <ul
          style={{
            margin: '0',
            padding: '0',
            paddingBottom: '24px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {similarJobs.map(each => (
            <SimilarJobsSection key={each.idInSimilar} value={each} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default JobSpecified
