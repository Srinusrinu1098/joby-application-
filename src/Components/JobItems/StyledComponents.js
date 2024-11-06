import styled from 'styled-components'

export const IconStyle = styled.div`
  color: #ffffff;
  border: 1px solid #ffffff;
  height: 30px;
  width: 60px;
  display: none;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  @media (min-width: 577px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
export const InputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media (min-width: 577px) {
    justify-content: flex-start;
  }
`

export const SmInput = styled.input`
  background: transparent;
  height: 30px;
  border: 1px solid #ffffff;
  width: 300px;
  display: none;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  outline: 0px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  @media (min-width: 577px) {
    display: inline;
  }
`

export const NoJobsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media (min-width: 577px) {
    justify-content: flex-start;
  }
`

export const NoJobsDisplayImg = styled.img`
  padding-top: 14px;
  width: 200px;
  @media (min-width: 577px) {
    padding-top: 94px;
    width: 400px;
    justify-content: flex-start;
  }
`
