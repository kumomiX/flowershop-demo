import React, { Component } from 'react'
import Navbar from 'components/global/Navbar'
import { connect } from 'react-redux'
import Loading from 'components/global/Loading'
import ProductListing from 'components/products/ProductListing'

class ProductPage extends Component {
  item = {}

  componentDidMount() {
    if (this.props.flowers && this.props.flowers.length >= 1) {
      this.getItem()
    }
  }

  getItem = () => {
    const id = this.props.location.pathname.replace(/\/product\//, '')
    const item = this.props.flowers.find(i => i.id === id)
    this.item = item
    this.forceUpdate()
  }

  render() {
    const { price, description, name, imageUrl } = this.item

    return Object.getOwnPropertyNames(this.item).length >= 1 ? (
      <div className="product-page">
        <Navbar />

        <main className="content">
          <ProductListing
            price={price}
            description={description}
            name={name}
            imageUrl={imageUrl}
          />
          <section className="product-info">info</section>
        </main>
      </div>
    ) : (
      <Loading />
    )
  }
}

const mapStateToProps = state => {
  const flowers = state.flowers
  return { flowers }
}

// export default ProductPage

export default connect(mapStateToProps, null)(ProductPage)
