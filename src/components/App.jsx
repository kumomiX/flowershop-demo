import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'components/home/HomePage'
import ProductsPage from 'components/products/ProductsPage'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={ProductsPage} />
  </div>
)

export default App
