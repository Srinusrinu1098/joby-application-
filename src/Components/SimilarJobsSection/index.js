import {FaStar} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
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
} from './StyledComponents'

const SimilarJobsSection = props => {
  const {value} = props
  const {
    similarCompanyLogoUrl,
    employmentTypeInSimilar,
    jobDescriptionInSimilar,
    locationInSimilar,
    ratingInSimilar,
    titleInSimilar,
  } = value
  return (
    <Listedones>
      <ImgItemFlex>
        <ListImg src={similarCompanyLogoUrl} alt="company logo" />
        <TitleAndRating>
          <TitleHeading>{titleInSimilar}</TitleHeading>
          <Rating>
            <FaStar style={{color: '#fbbf24'}} />
            <RatingInNumber>{ratingInSimilar}</RatingInNumber>
          </Rating>
        </TitleAndRating>
      </ImgItemFlex>
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
      <p
        style={{
          color: '#ffffff',
          margin: '0',
          fontSize: '12px',
          paddingTop: '8px',
        }}
      >
        {jobDescriptionInSimilar}
      </p>
      <LocationJobTypePackageCon>
        <LocationAndRole>
          <LocationCon>
            <MdLocationOn style={{color: '#ffffff'}} />
            <Location>{locationInSimilar}</Location>
          </LocationCon>
          <JobTypeCon>
            <BsFillBriefcaseFill style={{color: '#ffffff'}} />
            <JobType>{employmentTypeInSimilar}</JobType>
          </JobTypeCon>
        </LocationAndRole>
      </LocationJobTypePackageCon>
    </Listedones>
  )
}

export default SimilarJobsSection
