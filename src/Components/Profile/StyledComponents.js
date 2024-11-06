import styled from 'styled-components'

export const ProfileCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
  background-size: cover;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 10px;
  padding: 24px;
  @media (min-width: 577px) {
    width: 250px;
  }
`
export const ProfileH1 = styled.h1`
  color: #4f46e5;
  margin: 0px;
  font-size: 24px;
`

export const ProfileImg = styled.img`
  width: 50px;
`

export const ProfileBio = styled.p`
  font-size: 18px;
  color: #64748b;
  display: flex;
  margin: 0px;
  padding-top: 8px;
`
export const ProfileHr = styled.hr`
  border: 1px solid #64748b;
`
