import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchFlowersWithRedux from 'actions/flowersActions'
import ProductList from 'components/products/ProductList'
import Loading from 'components/global/Loading'
import Navbar from 'components/global/Navbar'

class ProductsPage extends Component {
  componentDidMount() {
    if (this.props.flowers.length < 10) this.props.fetchFlowersWithRedux()
  }

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

const mapDispatchToProps = dispatch => ({
  fetchFlowersWithRedux: () => dispatch(fetchFlowersWithRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
