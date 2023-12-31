import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeFromWishlist} from '../redux/slices/wishListSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {

     const wishlistArray= useSelector((state)=> state.wishlistReducer)
     console.log(wishlistArray);
      
    const dispatch = useDispatch()

    const handlewishlist =(item)=>{
             
         dispatch(addToCart(item))
         dispatch(removeFromWishlist(item.id))
    }
    
  return (
    <div>
      
      <Row className='ms-3 me-3' style={{marginTop:'150px'}}>
    
      { wishlistArray?.length>0?
        wishlistArray?.map((item)=>
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
      <Card.Img className='p-4' variant="top" src={item.image} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}...  </Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,50)}...</p>
          <p className='fw-bolder'>Price : ₹ {item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i></Button>
        </div>
      </Card.Body>
      </Card>

      </Col>)
       :
        <div className='d-flex justify-content-center align-items-center flex-column'>

          <h3>Your Wish List is empty</h3>
          <button className='btn btn-success mt-2'><Link style={{textDecoration:'none', color:'white'}} to={'/'}>Back to home</Link></button>
        </div>
      }
    </Row>


      
    </div>
  )
}

export default WishList