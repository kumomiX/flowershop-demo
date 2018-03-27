import React from 'react'

const OptionsLinks = ({ flowers, setFilter }) => {
  const colors = [...new Set(flowers.map(f => f.color))]
  return (
    <section className="options-links-container content">
      {colors.map(c => (
        <a
          key={c}
          href=""
          onClick={e => {
            e.preventDefault()
            setFilter(c)
          }}
          className="option-link"
        >
          {c}
        </a>
      ))}
    </section>
  )
}

export default OptionsLinks
