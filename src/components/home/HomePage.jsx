import React, { Component } from 'react'
import Header from 'components/global/Header'
import Navbar from 'components/global/Navbar'
import ProductList from 'components/products/ProductList'
import { connect } from 'react-redux'
import fetchFlowersWithRedux from 'actions/flowersActions'

class HomePage extends Component {
  componentDidMount() {
    if (this.props.flowers.length < 10) this.props.fetchFlowersWithRedux()
  }

  render() {
    return (
      <div className="homepage">
        <Navbar light={'light'} />
        <Header />
        <main>
          {this.props.flowers ? (
            <ProductList products={this.props.flowers} />
          ) : (
            <div>Loading...</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
