import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import fetchFlowersWithRedux from 'actions/flowersActions'
import setFilter from 'actions/filterActions'
import Home from 'components/pages/HomePage'
import Products from 'components/pages/ProductsPage'
import Options from 'components/pages/OptionsPage'
import Product from 'components/pages/ProductPage'
import Cart from 'components/pages/CartPage'
import Loading from 'components/global/Loading'

class App extends Component {
  componentDidMount() {
    if (this.props.flowers.length <= 0) this.props.fetchFlowersWithRedux()
  }
  render() {
    return this.props.flowers.length > 0 ? (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
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

const mapDispatchToProps = dispatch => ({
  fetchFlowersWithRedux: () => dispatch(fetchFlowersWithRedux()),
  setFilter: c => dispatch(setFilter(c))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
