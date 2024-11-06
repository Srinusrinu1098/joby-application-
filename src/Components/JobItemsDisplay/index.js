import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaStar} from 'react-icons/fa'
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
} from './StyledComponents'

const JobItemsDisplay = props => {
  const {value} = props
  const {
    id,
    companyImage,
    description,
    employmentType,
    location,
    packages,
    title,
    rating,
  } = value

  return (
    <Link to={`/jobs/${id}`} style={{textDecoration: 'none', color: '#ffffff'}}>
      <Listedones>
        <ImgItemFlex>
          <ListImg src={companyImage} alt="company logo" />
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
        <p style={{color: '#ffffff'}}>{description}</p>
      </Listedones>
    </Link>
  )
}
export default JobItemsDisplay
