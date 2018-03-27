import React, { Component } from 'react'
import Header from 'components/global/Header'
import Navbar from 'components/global/Navbar'
import ProductList from 'components/products/ProductList'
import { connect } from 'react-redux'
import setFilter from 'actions/filterActions'
import OptionsList from 'components/options/OptionsList'

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Navbar light={'light'} />
        <Header
          text={'Flowers for you.'}
          imageUrl={'https://unsplash.it/1980?image=940'}
          arrow
        />
        <OptionsList
          products={this.props.flowers}
          setFilter={this.props.setFilter}
        />
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
  setFilter: c => dispatch(setFilter(c))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
