import styled from 'styled-components'

export const MainBgContainer = styled.div`
  background-color: #000000;
  height: 100%;
  width: 100%;
  padding: 24px;
  @media (min-width: 577px) {
    display: flex;
    height: 100%;
    width: 100%;
  }
`
export const SmInput = styled.input`
  background: transparent;
  height: 30px;
  border: 1px solid #ffffff;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  outline: 0px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  @media (min-width: 577px) {
    display: none;
  }
`
export const IconStyle = styled.div`
  color: #ffffff;
  border: 1px solid #ffffff;
  height: 30px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  @media (min-width: 577px) {
    display: none;
    justify-content: space-around;
    width: 200px;
  }
`
export const InputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EmploymentTypes = styled.h1`
  color: #ffffff;
  font-size: 14px;
`

export const JobItemDiv = styled.div`
  @media (min-width: 577px) {
    padding-left: 24px;
  }
`
export const ProfileHr = styled.hr`
  color: #ffffff;
`
