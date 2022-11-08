// ROUTER
import { Link } from "react-router-dom";
// ICONS
import { BsFillCartFill } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <div className="bg-white shadow-lg">
      <nav className="container flex justify-between items-center mx-auto py-8">
        <div>
          <Link className="mx-4" to="/">
            Home
          </Link>
          <Link className="mx-4" to="/store">
            Store
          </Link>
          <Link className="mx-4" to="/about">
            About
          </Link>
        </div>
        <div className="mx-4 relative">
          <button
            className="border-2 border-blue-500 rounded-full cursor-pointer text-black p-4  hover:bg-blue-500 hover:transition-all hover:duration-300 hover:shadow-xl hover:text-white"
            onClick={openCart}
          >
            <BsFillCartFill className="text-xl " />
          </button>
          <div className="absolute bottom-[-16px] right-[-8px] py-1 px-3 rounded-full bg-red-500 text-white">
            {cartQuantity}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
