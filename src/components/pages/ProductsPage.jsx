import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from 'components/products/ProductList'
import Loading from 'components/global/Loading'
import Navbar from 'components/global/Navbar'

class ProductsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="products">
          {this.props.flowers ? (
            <ProductList products={this.props.flowers} />
          ) : (
            <Loading />
          )}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const flowers = state.flowers
  return { flowers }
}

export default connect(mapStateToProps, null)(ProductsPage)
