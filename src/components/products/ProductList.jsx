import React from 'react'
import ProductCard from 'components/products/ProductCard'

const ProductList = ({ products }) => (
  <section className="product-list content">
    {products.map((product, i) => (
      <ProductCard
        key={i}
        id={product.id}
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
