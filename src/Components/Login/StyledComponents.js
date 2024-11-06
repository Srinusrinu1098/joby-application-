import styled from 'styled-components'

export const LoginCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #000000;
`

export const LogCon = styled.form`
  display: flex;
  flex-direction: column;
  padding: 44px;
  align-items: center;
  min-height: 400px;
  width: 400px;
  background-color: #272727;
  border-radius: 14px;
  @media (max-width: 576px) {
    min-height: 300px;
    max-width: 300px;
  }
`
export const Logo = styled.img`
  height: 45px;
  width: 160px;
  margin-bottom: 50px;
  @media (max-width: 576px) {
    height: 30px;
    width: 80px;
    margin-bottom: 30px;
  }
`
export const LabelUser = styled.label`
  color: #ffffff;
  padding-top: 14px;
  align-self: flex-start;
  @media (max-width: 576px) {
    font-size: 8px;
  }
`
export const UserInput = styled.input`
  color: #ffffff;
  align-self: flex-start;
  margin-top: 8px;
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  background: transparent;
  padding-left: 10px;
  outline: 0px;
  @media (max-width: 576px) {
    width: 210px;
    font-size: 8px;
  }
`
export const ButtonLog = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  height: 30px;
  width: 300px;
  border: 0px;
  border-radius: 8px;
  margin-top: 20px;
  align-self: flex-start;
  @media (max-width: 576px) {
    width: 210px;
    margin-top: 10px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
