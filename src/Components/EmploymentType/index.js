import {ListItem, InputItemCheck, LabelItem} from './StyledComponents'

const EmploymentType = props => {
  const {values, inputValueRecive, inputValueRemove} = props
  const {employmentTypeId, label} = values
  const inputValueSend = event => {
    if (event.target.checked === true) {
      inputValueRecive(event.target.value)
    } else {
      inputValueRemove(event.target.value)
    }
  }

  return (
    <ListItem>
      <InputItemCheck
        type="checkbox"
        value={employmentTypeId}
        onChange={inputValueSend}
      />
      <LabelItem>{label}</LabelItem>
    </ListItem>
  )
}

export default EmploymentType
