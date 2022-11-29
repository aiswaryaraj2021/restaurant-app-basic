import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import RestOp from './RestOp';
import Reviews from './Reviews'

function Viewrestrnt() {
    const params = useParams()
    console.log(params.id);

    const [allRestrnts,setRestrnt]= useState([])
    //fn for api call to get all restrnts.json
    const getRestrnts = async()=>{
      await fetch('/db.json')
      .then((data)=>{
       data.json()
       .then((result)=>{
           setRestrnt(result.restaurants);
       })
   })
   }
   console.log(allRestrnts);

   useEffect(()=>{
       getRestrnts()
   },[])


   const viewRestr =allRestrnts.find(item=>item.id==params.id)
   console.log(viewRestr);

  return (

   <>
    {
      viewRestr ?(
        
        <Row className='p-3'>
          <Col lg={3}>
          <Image src={viewRestr.photograph} fluid/>
          </Col>
          <Col>
          <p>ID: {viewRestr.id}</p>
          <h1>{viewRestr.name}</h1>
          <h5>Cusine: {viewRestr.cuisine_type}</h5>
          <h6>Neighborhood:{viewRestr.neighborhood}</h6>
          <h6>Address: {viewRestr.address}</h6>
          <RestOp operate={viewRestr.operating_hours}/> <br></br>
          <Reviews review={viewRestr.reviews}/>
          </Col>
        </Row>
      ): 'null'
    }
   </>

   )
}

export default Viewrestrnt