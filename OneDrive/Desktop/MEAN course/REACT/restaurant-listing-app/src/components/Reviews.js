import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

function Reviews({review}) {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Button variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Click here for Customer Reviews
      </Button>
      <Collapse in={open}>
      <div className='mt-4 text-warning' id="example-collapse-text">     
        {
            review.map(item=>(
               <div>
                <ListGroup.Item>
                <h6>{item.name}, <span>{item.date}</span></h6>
                <p>Rating: {item.rating}</p>
                <p>Comments: {item.comments}</p>
                </ListGroup.Item>


               </div>
            ))
        }
        </div>
      </Collapse>
    </>
  )
}

export default Reviews