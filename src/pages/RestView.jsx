import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const [show, setShow] = useState(false);

  const {id} = useParams()
  console.log(id);
  const allRestaurant= useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(allRestaurant);

  const selectedrestaurant = allRestaurant.find(item=>item.id ==id)
  console.log(selectedrestaurant);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <Row>
      <Col md={1} ></Col>
      <Col md={3} >
        <img width={'100%'} height={'100%'} className='rounded' src={selectedrestaurant.photograph} />
      </Col>
      <Col md={7}  className='px-5'>
        <hr />
        <h3 className='text-center' ><span className='text-warning' >RESTAURANT </span>DETAILS</h3>
        <hr />
        <ListGroup>
      <ListGroup.Item><h4 className='text-center p-4'>{selectedrestaurant.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neigbourhood : {selectedrestaurant.neighborhood} </ListGroup.Item>
      <ListGroup.Item>Cuisine Type : {selectedrestaurant.cuisine_type
} </ListGroup.Item>
      <ListGroup.Item>Address :  {selectedrestaurant.address
} </ListGroup.Item>
      <ListGroup.Item className='text-center p-3 mb-2' >
        <button onClick={handleShow} className='btn btn-warning' >Operating Hour</button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Working Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
        <ListGroup.Item>Monday : 9:00 AM TO 10:00 AM</ListGroup.Item>
        <ListGroup.Item>Tuesday : 9:00 AM TO 10:00 AM </ListGroup.Item>
        <ListGroup.Item>Wednesday : 9:00 AM TO 10:00 AM</ListGroup.Item>
        <ListGroup.Item>Thursday : 9:00 AM TO 10:00 AM</ListGroup.Item>
        <ListGroup.Item>Friday : 9:00 AM TO 10:00 AM</ListGroup.Item>
        <ListGroup.Item>Saturday : 9:00 AM TO 10:00 AM</ListGroup.Item>
        <ListGroup.Item>Sunday : 9:00 AM TO 9:00 AM</ListGroup.Item>
           </ListGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      </ListGroup.Item>
    </ListGroup>
    <hr />
      </Col>
      <Col md={1} ></Col>
     
    </Row>


    </>
  )
}

export default RestView