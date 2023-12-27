import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import MenuCard from '../component/MenuCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'


function Home() {

  const {allRestaurant,loading,error} = useSelector((state)=>state.restaurantSlice)
  console.log(allRestaurant); 
 
  const dispatch = useDispatch()

 useEffect(() => {

  dispatch(fetchRestaurant())

 }, [])
 


  return (
    

      <Row>

         <div className='mt-3'>
          {
            loading &&
            <p> </p>
          }
         </div>

        {allRestaurant?.length>0?
        allRestaurant?.map((restaurant)=>(<Col className=' px-5 py-3' sm={6} md={4} >

            <MenuCard restaurant={restaurant} />

          </Col>
        )) : <p>no restaurant available</p>
        } 

       



      </Row>


   
  )
}

export default Home 

