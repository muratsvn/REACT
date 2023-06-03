import React from 'react'

const Welcome2 = (props) => {
    const {firstName, lastName} = props; // destructuring yaptık props.firstname yazmak yerine firstName yazıyoruz

  return (
    <div className='welcome'>
        <h2>
            Welcome{firstName} {lastName}
        </h2>
    </div>
  )
}

export default Welcome2