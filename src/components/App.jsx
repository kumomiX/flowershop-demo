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
import Checkout from 'components/pages/CheckoutPage'
import Loader from 'react-loader'

class App extends Component {
  componentDidMount() {
    if (!this.props.flowers.fetched) this.props.fetchFlowersWithRedux()
  }

  render() {
    return (
      <div>
        <Loader loaded={this.props.flowers.fetched}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/options" component={Options} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/product" component={Product} />
          </div>
        </Loader>
      </div>
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
