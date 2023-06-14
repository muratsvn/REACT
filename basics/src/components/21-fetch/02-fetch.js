import React, { useEffect, useState } from 'react'

const Fetch2 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://648a1ac75fa58521cab0d22c.mockapi.io/api/v1/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }, []);



  return (
    <div>Fetch2</div>
  )
}

export default Fetch2