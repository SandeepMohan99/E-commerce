import React from 'react'

import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%', height:'300px', color:'white'}} className='d-flex align-items-center justify-content-center flex-column bg-primary text-align-center'>
        <div className="footer d-flex align-items-center justify-content-evenly w-100">
          <div className="website" style={{width:'400px'}}>
            <h4 style={{overflowY:'hidden'}}> <i class="fa-solid fa-cart-shopping fa-beat text-warning me-3"></i>{' '}
                 E-CART</h4>
            <h6 style={{overflowY:'hidden'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam ipsa dolorum, ipsam voluptatum nihil rerum veniam </h6>     
          </div>
          <div className="link d-flex flex-column">
            <h4 style={{overflowY:'hidden'}}>Links</h4>

            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
            <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
            <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>WishList</Link>

          </div>
          <div className="guides d-flex flex-column">
            <h4 style={{overflowY:'hidden'}}>Guides</h4>

            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>React</Link>
            <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>React Bootstarp</Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>

          </div>
          <div className="contact">
            <h4 style={{overflowY:'hidden'}}>Contact Us</h4>
            <div className="d-flex mb-3">
               <input type="text" className='form-control' placeholder='Enter your Email iD' />
               <button className='btn btn-warning text-white ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly mt-4'>

            <Link to={'https://www.instagram.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x mt-2"></i> </Link>
               <Link to={'https://twitter.com/login'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x mt-2"></i> </Link>
               <Link to={'https://www.linkedin.com/feed/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x mt-2"></i> </Link>
               <Link to={'https://www.facebook.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x mt-2"></i> </Link>

            </div>
          </div>
          
        </div>
        <p className='mt-5'>Copyright © 2023 Media Player.Build with React</p>
    </div>
  
  )
}

export default Footer