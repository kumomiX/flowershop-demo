import React, { Component } from 'react'
import Header from 'components/global/Header'
import Navbar from 'components/global/Navbar'
import ProductList from 'components/products/ProductList'
import { connect } from 'react-redux'
import OptionsLinks from 'components/options/OptionsLinks'
import setFilter from 'actions/filterActions'

class OptionsPage extends Component {
  render() {
    const { flowers, filterStr } = this.props

    return (
      <div className="optionspage">
        <Navbar light={'light'} />

        {flowers.length >= 1 &&
          filterStr.length >= 1 && (
            <div>
              <Header
                text={filterStr || flowers[0].color}
                imageUrl={flowers
                  .find(f => f.color === filterStr)
                  .imageUrl.replace(/\/\d\d\d\?/, '/1980?')}
              />

              <main>
                <OptionsLinks
                  flowers={flowers}
                  setFilter={this.props.setFilter}
                />
                <ProductList
                  products={
                    filterStr.length >= 1
                      ? flowers.filter(f => f.color === filterStr)
                      : flowers
                  }
                />
              </main>
            </div>
          )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const flowers = state.flowers.products
  const filterStr = state.filter
  return { flowers, filterStr }
}

const mapDispatchToProps = dispatch => ({
  setFilter: c => dispatch(setFilter(c))
})

export default connect(mapStateToProps, mapDispatchToProps)(OptionsPage)
