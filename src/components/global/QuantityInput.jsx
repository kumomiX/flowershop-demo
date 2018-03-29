import React from 'react'

const QuantityInput = ({ value, onDecrement, onChange, onIncrement }) => (
  <div className="quantity-input">
    <button className="number-button decrement" onClick={onDecrement}>
      -
    </button>
    <input
      type="number"
      name="quantity-input"
      className="quantity"
      value={value}
      onChange={onChange}
    />
    <button className="number-button increment" onClick={onIncrement}>
      +
    </button>
  </div>
)
export default QuantityInput
