import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketIcon';

function Header() {
    return (
        <nav className = "header" >
         {/*logo */}
         <Link to = "/">
         <img className = "logo" src="./videos/download.png"
         />
         </Link>

         {/*search bar*/} 
         <div className = "header_search">
         <input type = "text" className= "search_bar"/>
         <SearchIcon className = "searchicon"/>
         </div>  

         {/*3 links*/}

         <div className =  "header_nav" >
         <Link to = "/login" className = "header_link">
             <div className = "header_options">
             <span className = "line1">Hello Dinky</span>
             <span className = "line2">Sign in</span>
             </div>
         </Link>
        
         <Link to = "/login" className = "header_link">
             <div className = "header_options">
             <span className = "line1">Returns &</span>
             <span className = "line2" >Orders</span>
             </div>
         </Link>

         <Link to = "/login" className = "header_link">
             <div className = "header_options">
             <span className = "line1" >Your</span>
             <span className = "line2" >Prime</span>
             </div>
         </Link>
         {/*shopping basket*/}
         <div className= "basket">
         <span>0</span>
         </div>

    </div>
        </nav>
    )
}

export default Header;
