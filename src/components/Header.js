import logo from "../../images/png/color.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const [status, setStatus] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <header className="flex justify-between h-18 shadow-md px-12 py-2">
            <div className="">
                <Link to="/">
                    <img className="w-24" src={logo} alt="logo" />
                </Link>
            </div>

            <nav className="flex items-center gap-10">
                <button className="text-xl  font-medium" href="#" id="signup" onClick={() => setStatus(!status)}> {status ? "Sign out" : "Sign in"}</button>
                <button className="text-xl  font-medium" href="#" id="signup" > Offers </button>
                <Link className="text-xl  font-medium" to="/Help"> Help </Link>
                <Link className="text-2xl text-custom-default" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} className="cart" />({cartItems.length})</Link>
            </nav>
        </header>
    );
}

export default Header;