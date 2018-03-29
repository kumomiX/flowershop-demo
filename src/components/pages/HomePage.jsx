import React from 'react'
import Header from 'components/global/Header'
import Navbar from 'components/global/Navbar'
import TopPicks from 'components/products/TopPicks'
import { connect } from 'react-redux'
import setFilter from 'actions/filterActions'
import OptionsList from 'components/options/OptionsList'
import Footer from 'components/global/Footer'

const HomePage = ({ flowers, setFilter }) => (
  <div className="homepage">
    <Navbar light={'light'} />
    <Header
      text={'Flowers for you.'}
      imageUrl={'https://unsplash.it/1980?image=940'}
      arrow
    />
    <OptionsList products={flowers} setFilter={setFilter} />
    <main>
      {flowers ? <TopPicks products={flowers} /> : <div>Loading...</div>}
    </main>
    <Footer />
  </div>
)

const mapStateToProps = state => {
  const flowers = state.flowers
  return { flowers }
}

const mapDispatchToProps = dispatch => ({
  setFilter: c => dispatch(setFilter(c))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
