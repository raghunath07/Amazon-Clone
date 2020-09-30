import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

// npm install @material-ui/icons

function Header() {
    //pull from store
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img 
            alt="header_logo"
            className="header__logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'>
            </img>
            </Link>
            <div 
            className="header__search">
            <input
            className="header__searchInput" type="text"
            ></input>
            <SearchIcon
            className="header__searchIcon" />
            </div>
            <div className="header__nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className="header__optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>

            <Link to={user && "/orders"}>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
            </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span 
                    className="header__optionLineTwo header_baseketCount">{basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
