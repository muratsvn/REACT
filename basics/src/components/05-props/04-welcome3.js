import React from 'react'

const Welcome3 = ({firstName, lastName}) => {
    // props'lar doğrudan parametre içerisinde destructure edilebilir
    
  return (
    <div className='welcome'>
        <h2>
            Welcome{firstName} {lastName}
        </h2>
    </div>
  )
}

export default Welcome3