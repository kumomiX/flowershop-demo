import React, { Component } from 'react'
import QuantityInput from 'components/global/QuantityInput'

class ProductListing extends Component {
  state = {
    value: 1
  }
  onIncrement = e => {
    e.preventDefault()
    if (this.state.value >= this.props.product.quantity) return
    this.setState({ value: this.state.value + 1 })
  }

  onDecrement = e => {
    e.preventDefault()
    if (this.state.value <= 1) return
    this.setState({ value: this.state.value - 1 })
  }

  onChange = e => {
    e.preventDefault()
    if (e.target.value > this.props.product.quantity) return
    //if (e.target.value < 0) return
    //if (!isNaN(e.target.value)) return
    //let value = Number(e.target.value)
    //value.replace(/-/g, '')
    this.setState({ value: e.target.value })
  }

  inCart = () => {
    let index = -1
    for (let i = 0; i < this.props.cart.length; i++) {
      if (this.props.cart[i].product.id === this.props.product.id) {
        index = i
        break
      }
    }
    return index
  }

  addToCart = e => {
    e.preventDefault()
    let i = this.inCart()
    if (i > -1) {
      this.props.addQuantity(i, this.state.value)
    } else {
      this.props.addToCart(this.props.product, this.state.value)
    }
  }

  render() {
    const { price, description, name, imageUrl } = this.props.product
    return (
      <section className="product-listing">
        <div className="product-image">
          <img src={imageUrl} alt={description} />
        </div>

        <div className="product-description">
          <h2>{name}</h2>
          <p className="manufacturer">by flowershop</p>
          <p className="price">${price}</p>
          <p className="description">{description}</p>

          <form action="" className="product">
            <QuantityInput
              value={this.state.value}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
              onChange={this.onChange}
            />
            <button type="submit" className="submit" onClick={this.addToCart}>
              Add to cart
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export default ProductListing
