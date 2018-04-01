import React from 'react'

const Input = ({ name, placeholder, required }) => {
  return required ? (
    <label className={`input-wrap ${name} required`}>
      <input
        type="text"
        name={name}
        required
        placeholder={placeholder}
        aria-label={name}
        autoComplete={name}
      />
    </label>
  ) : (
    <label className={`input-wrap ${name}`}>
      <input
        type="text"
        name={name}
        className={name}
        placeholder={placeholder}
        aria-label={name}
        autoComplete={name}
      />
    </label>
  )
}

export default Input
