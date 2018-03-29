import React from 'react'

const Select = ({ name, options }) => (
  <label className={`input-wrap ${name} required select-fallback`}>
    <select type="text" name={name} required aria-label={name}>
      {options.map((opt, ind) => (
        <option key={ind} value={opt.value}>
          {opt.placeholder}
        </option>
      ))}
    </select>
  </label>
)

export default Select
