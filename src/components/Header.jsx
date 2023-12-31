import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //here state represent the store 
  //to access state useSelector hook is used this will show
  const wishList = useSelector((state)=>state.wishlistReducer)
  /* console.log(wishList); */

  const cart = useSelector((state)=>state.cartReducer)

  return (
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}}>
    <Container>
      <Navbar.Brand><Link style={{textDecoration:'none', color:'white',}} to = {'/'}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>E-cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded me-5 mt-2'><Link style={{textDecoration:'none', color:'white',}} to = {'/wishlist'} ><i class="fa-solid fa-heart me-2" style={{color:'red'}}></i> Wish List <Badge bg="secondary">{wishList.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded me-5 mt-2'><Link style={{textDecoration:'none', color:'white',}} to = {'/cart'}> <i class="fa-solid fa-cart-shopping me-2" style={{color:'yellow'}}></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header