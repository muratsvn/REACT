import React from 'react'

const Stat = ({name, value}) => {
  return (
    <div>
        <h3>{name}</h3>
        <h6>{value}</h6>

    </div>
  )
}

export default Stat