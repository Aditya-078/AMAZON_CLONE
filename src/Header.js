import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBasket, BsFillBasket2Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className= 'header'>
      
       <Link to="/">
       <img 
      className='header_logo'
      src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
      />
       </Link>
     
    <div className="header_search">
      <input
      className='header_searchInput'
      type="text" />
      <AiOutlineSearch className='search_Icon'/>
      
      

    </div> 
    <div className='header_nav'>
    <Link to = "/login">
        <div className='header_option'>
       
            <span
            className='header_optionLineOne'>Hello
            User
            </span>
            
            <span
            className='header_optionLineTwo'>Sign
            In
            </span>
            

        </div></Link>
        <div className='header_option'>
        <span
            className='header_optionLineOne'>Returns
            </span>
            <span
            className='header_optionLineTwo'>
                & Orders
            </span>


        </div> <Link to={"/Prime"}>
        <div className='header_option'>
        <span
            className='header_optionLineOne'>Your
            </span>
            <span
            className='header_optionLineTwo'>Prime
            
            </span>


        </div></Link>
        <Link to="/checkout" >
        <div className='header_optionBasket'>
        <BsFillBasket2Fill />
          <span className='header_optionLineTwo 
          header_basketCount'>
            {basket?.length}
          </span>
        </div>
        </Link>
    </div>

    </div>
  )
}

export default Header