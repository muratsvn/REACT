import React from 'react'
import { Alert, Button, Container } from 'react-bootstrap'

const Events = () => {
    const parametresizFonksiyon =()=>{
        alert('Parametresiz Fonksiyon tetiklendi');
    };

    const parametreliFonksiyon =(parametre)=>{
        alert(`Parametreli fonksiyon tetiklendi. Parametre: ${parametre}`)
    }

  return (
    <Container className='d-flex gap-3'>
        <Button variant='danger' onClick={parametresizFonksiyon}>
            Parametresiz
        </Button>

        <Button variant='warning' onClick={ () =>
            parametreliFonksiyon("Merhaba")}>
            Parametreli
        </Button>



    </Container>
  )
}

export default Events