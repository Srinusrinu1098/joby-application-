import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 577px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
    height: 100vh;
    width: 100%;
    padding-top: 6%;
    background-size: cover;
    background-position: center;
  }
`
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: #272727;
  @media (min-width: 577px) {
    padding-left: 44px;
    padding-right: 44px;
  }
`
export const LogoImage = styled.img`
  width: 80px;
`
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 36%;
  @media (min-width: 577px) {
    display: none;
  }
`
export const HomeAndJob = styled.div`
  display: none;
  @media (min-width: 577px) {
    display: flex;
    justify-content: space-between;
    width: 10%;
  }
`
export const JobEl = styled.h1`
  color: #ffffff;
  font-size: 18px;
  padding-left: 34px;
`
export const HomeEl = styled.h1`
  color: #ffffff;
  font-size: 18px;
`
export const ButtonEl = styled.button`
  display: none;
  @media (min-width: 577px) {
    display: inline;
    background-color: #6366f1;
    color: #ffffff;
    height: 30px;
    width: 90px;
    border: 0px;
    border-radius: 8px;
  }
`
export const Heading = styled.h1`
  padding: 14px;
  font-size: 28px;
  color: #ffffff;
  margin: 0px;
  @media (min-width: 577px) {
    font-size: 56px;
    max-width: 600px;
  }
`
export const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  padding: 14px;
  margin: 0px;

  @media (min-width: 577px) {
    font-size: 22px;
    max-width: 600px;
  }
`
export const Button = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  height: 30px;
  width: 90px;
  border: 0px;
  border-radius: 8px;
  margin: 14px;
  cursor: pointer;
  @media (min-width: 577px) {
    height: 40px;
    width: 120px;
  }
`
