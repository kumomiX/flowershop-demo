import React from 'react'
import { connect } from 'react-redux'
import ProductList from 'components/products/ProductList'
import Footer from 'components/global/Footer'
import Navbar from 'components/global/Navbar'

const ProductsPage = ({ products }) => (
  <div>
    <Navbar />
    <header />
    <main className="products">
      <ProductList products={products} />
    </main>
    <Footer />
  </div>
)

const mapStateToProps = ({ flowers }) => {
  const products = flowers.products
  return { products }
}

export default connect(mapStateToProps)(ProductsPage)
