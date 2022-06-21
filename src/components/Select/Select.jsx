export const Select = ({
  inputProps,
  errorText,
  options=[],
  label
  
}) => {
  

  return (
    <div className="select__wrapper">
      <select {...inputProps}>
        <option value="">{label}</option>
        {options.map(o => {
          return (
            <option key={o.id} value={o.id}>{o.value}</option>
          )
        })}
      </select>
    {errorText && <span className="input__error">{errorText}</span>}
    </div>
  )
}