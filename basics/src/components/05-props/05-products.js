import React from 'react'
import ProductCard from './06-product-card'

const Products = ({children}) => {
  return (
    <div>
      <ProductCard name="John"/>
        <h2>Sony Display</h2>
      <br />
      {children}
    </div>
  )
}

export default Products