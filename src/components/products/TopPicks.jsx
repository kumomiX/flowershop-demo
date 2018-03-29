import React from 'react'
import ProductCard from 'components/products/ProductCard'

const TopPicks = ({ products }) => (
  <section className="top-picks">
    <h2>Top picks</h2>
    <div className="product-list content">
      {products
        .slice(0, 6)
        .map((product, i) => (
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
    </div>
  </section>
)

export default TopPicks
