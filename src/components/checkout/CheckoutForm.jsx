import React from 'react'
import CheckoutFieldset from 'components/checkout/CheckoutFieldset'

const CheckoutForm = ({ clearCart }) => (
  <form className="checkout-form">
    <CheckoutFieldset
      header={'Your details'}
      className="details"
      inputs={[
        { name: 'name', placeholder: 'Name', required: true },
        { name: 'email', placeholder: 'Email address', required: true }
      ]}
    />

    <CheckoutFieldset
      header={'Billing address'}
      className="billing"
      inputs={[
        { name: 'firstname', placeholder: 'First Name', required: true },
        { name: 'lastname', placeholder: 'Last Name', required: true },
        { name: 'company', placeholder: 'Company', required: false },
        { name: 'address', placeholder: 'Adress Line', required: true },
        { name: 'state', placeholder: 'State', required: true },
        { name: 'postcode', placeholder: 'Postcode', required: true }
      ]}
      countrySelect
    />

    <CheckoutFieldset
      header={'Shipping address'}
      className="shipping"
      inputs={[
        { name: 'firstname', placeholder: 'First Name', required: true },
        { name: 'lastname', placeholder: 'Last Name', required: true },
        { name: 'company', placeholder: 'Company', required: false },
        { name: 'address', placeholder: 'Adress Line', required: true },
        { name: 'state', placeholder: 'State', required: true },
        { name: 'postcode', placeholder: 'Postcode', required: true }
      ]}
      countrySelect
    />

    <CheckoutFieldset
      clearCart={clearCart}
      header={'Payment'}
      className="payment"
      inputs={[
        { name: 'card-name', placeholder: 'Name on card', required: true },
        { name: 'card-number', placeholder: 'Card number', required: true },
        { name: 'card-cvc', placeholder: 'CVC', required: true }
      ]}
      select={[
        {
          name: 'expiry-month',
          options: [
            { value: '01', placeholder: 'January' },
            { value: '02', placeholder: 'February' },
            { value: '03', placeholder: 'March' },
            { value: '04', placeholder: 'April' },
            { value: '05', placeholder: 'May' },
            { value: '06', placeholder: 'June' },
            { value: '07', placeholder: 'July' },
            { value: '08', placeholder: 'August' },
            { value: '09', placeholder: 'September' },
            { value: '10', placeholder: 'October' },
            { value: '11', placeholder: 'November' },
            { value: '12', placeholder: 'December' }
          ]
        },
        {
          name: 'expiry-year',
          options: [
            { value: 2017, placeholder: 2017 },
            { value: 2018, placeholder: 2018 },
            { value: 2019, placeholder: 2019 },
            { value: 2020, placeholder: 2020 },
            { value: 2021, placeholder: 2021 },
            { value: 2022, placeholder: 2022 },
            { value: 2023, placeholder: 2023 },
            { value: 2024, placeholder: 2024 },
            { value: 2025, placeholder: 2025 },
            { value: 2026, placeholder: 2026 },
            { value: 2027, placeholder: 2027 }
          ]
        }
      ]}
      submit
    />
  </form>
)

export default CheckoutForm
