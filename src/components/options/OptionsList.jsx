import React from 'react'
import OptionCard from 'components/options/OptionCard'

const OptionsList = ({ products, setFilter }) => {
  const dups = []
  const noDups = products.filter(p => {
    if (dups.includes(p.color)) {
      return false
    } else {
      dups.push(p.color)
      return true
    }
  })

  return (
    <section className="options-list">
      {noDups
        .slice(0, 4)
        .map((product, i) => (
          <OptionCard
            key={i}
            name={product.name}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
            color={product.color}
            description={product.description}
            setFilter={setFilter}
          />
        ))}
    </section>
  )
}

export default OptionsList
