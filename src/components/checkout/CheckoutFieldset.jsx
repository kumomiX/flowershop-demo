import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from 'components/checkout/Input'
import Select from 'components/checkout/Select'
import CountrySelect from 'components/checkout/CountrySelect'

class CheckoutFieldset extends Component {
  state = {
    completed: false,
    collapsed: false
  }

  onClick = () => this.setState({ completed: true, collapsed: true })
  onSubmit = e => {
    this.props.clearCart()
  }
  switchCollapse = () => {
    if (this.state.completed)
      this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { header, inputs, countrySelect, select, submit } = this.props

    const { completed, collapsed } = this.state
    const className =
      ` ${this.props.className}` +
      (collapsed ? ' collapsed' : '') +
      (completed ? ' completed' : '')
    return (
      <fieldset className={className}>
        <div
          className={'form-header' + className}
          onClick={this.switchCollapse}
        >
          <h2>{header}</h2>
        </div>
        <div className="form-content">
          <div className="form-fields">
            {inputs.map((inp, index) => (
              <Input
                key={index}
                name={inp.name}
                placeholder={inp.placeholder}
                required={inp.required ? true : false}
              />
            ))}

            {countrySelect && <CountrySelect />}

            {select &&
              select.map((sel, ind) => (
                <Select key={ind} options={sel.options} name={sel.name} />
              ))}
          </div>

          {submit ? (
            <Link
              to="/products"
              type="submit"
              className="pay btn"
              onClick={this.onSubmit}
            >
              Pay
            </Link>
          ) : (
            <button type="button" className="continue" onClick={this.onClick}>
              Continue
            </button>
          )}
        </div>
      </fieldset>
    )
  }
}

export default CheckoutFieldset
