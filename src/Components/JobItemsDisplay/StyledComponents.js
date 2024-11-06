import styled from 'styled-components'

export const Listedones = styled.li`
  list-style: none;
  background-color: #272727;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 8px;
  @media (min-width: 577px) {
    min-width: 50px;
  }
`

export const ListImg = styled.img`
  height: 50px;
  width: 40px;
`
export const ImgItemFlex = styled.div`
  display: flex;
`
export const TitleAndRating = styled.div`
  padding-left: 14px;
`
export const TitleHeading = styled.h1`
  color: #ffffff;
  font-size: 14px;
  margin: 0;
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6px;
`
export const RatingInNumber = styled.p`
  padding-left: 8px;
  margin: 0;
  color: #ffffff;
  font-weight: 500;
`
export const LocationJobTypePackageCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LocationAndRole = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 160px;
`
export const LocationCon = styled.div`
  display: flex;
  align-items: center;
`
export const Location = styled.p`
  font-size: 8px;
  color: #ffffff;
  padding-left: 8px;
  font-weight: 500;
`
export const JobTypeCon = styled.div`
  display: flex;
  align-items: center;
`
export const JobType = styled.p`
  font-size: 8px;
  color: #ffffff;
  padding-left: 8px;
`

export const PackageCon = styled.div`
  color: #ffffff;
`

export const Package = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
`
