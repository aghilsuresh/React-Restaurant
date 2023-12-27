import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice'

function Header() {


  const dispatch = useDispatch()
  return (
    <>
     <Navbar variant='dark' >
        <Container>
          <Navbar.Brand href="#home"   className='d-flex ' > 
            <img
              alt=""
              src="https://webstockreview.net/images/clipart-restaurant-restaurant-logo-2.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           <h4 className=' ms-2 mt-3' > <span className='text-warning'> Food</span> Circle</h4>
          </Navbar.Brand>

          <input type="text" onChange={(e)=>dispatch(search(e.target.value))}  className='form-control w-25' placeholder='search by neighbourhood' />
        
        </Container>
      </Navbar>
    
    
    
    
    
    </>
  )
}

export default Header