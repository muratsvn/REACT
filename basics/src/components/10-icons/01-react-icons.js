import React from 'react'
import {  Container } from 'react-bootstrap'
import { GiCarrot } from 'react-icons/gi';
import {GiSeaTurtle} from 'react-icons/gi'; // sondaki gi ifadesi GiSeaTurtle deki Gi dir
import {FaCat} from 'react-icons/fa'; // sondaki fa ifadesi FaCat deki Fa dır
const ReactIcons = () => {
  return (
    <Container>
        <h2>React Icons</h2>
        <GiCarrot style={{fontSize:'50px', color:'orangered'}}/>
        <GiSeaTurtle style={{fontSize:'50px', color:'green'}}/>
        <FaCat style={{fontSize:'100px', color:'blown'}}/>
    
    </Container>
  )
}

export default ReactIcons