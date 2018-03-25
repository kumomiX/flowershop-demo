import React from 'react'
import ProductCard from 'components/global/ProductCard'

const ProductList = ({ products }) => (
  <section className="product-list">
    {products.map((product, i) => (
      <ProductCard
        key={i}
        name={product.name}
        imageUrl={product.imageUrl}
        price={product.price}
        quantity={product.quantity}
        color={product.color}
        description={product.description}
      />
    ))}
  </section>
)

export default ProductList
