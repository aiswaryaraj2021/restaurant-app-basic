import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Restrntcard({restrnt}) {
  console.log(restrnt);
  return (
    
    <Link style={{textDecoration:"none",color:"white"}} to={`Viewrestrnt/${restrnt.id}`}>
        <Card className='m-2'>
      <Card.Img variant="top" className='p-3' src={restrnt.photograph} />
      <Card.Body>
        <Card.Title>{restrnt.name}</Card.Title>
        <Card.Text>
        {restrnt.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Restrntcard