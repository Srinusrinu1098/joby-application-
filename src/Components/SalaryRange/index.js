import {ListItem, InputItemCheck, LabelItem} from './StyledComponents'

const SalaryRange = props => {
  const {values1, changeTheRadio} = props
  const {salaryRangeId, label} = values1

  const changeTheSalary = event => {
    changeTheRadio(event.target.value)
  }

  return (
    <ListItem>
      <InputItemCheck
        type="radio"
        value={salaryRangeId}
        name="salary"
        onChange={changeTheSalary}
      />
      <LabelItem>{label}</LabelItem>
    </ListItem>
  )
}
export default SalaryRange
