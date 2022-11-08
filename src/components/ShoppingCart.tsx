// REACT
import { FC } from "react";
// STATE
import { useShoppingCart } from "../context/ShoppingCartContext";
// ICONS
import { IoMdClose } from "react-icons/io";
// COMPONENT
import CartItem from "./CartItem";
// FUNCTIONS
import { formatCurrency } from "../utilities/formatCurrency";
// DATA
import storeItems from "../data/items.json";

const ShoppingCart: FC = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {isOpen ? (
        <main
          className="fixed top-0 right-0 w-[100vw] bg-[rgba(0,0,0,0.3)]  h-[100vh] z-10 "
          onClick={closeCart}
        >
          <section
            className="fixed top-0 right-0 w-full xl:w-1/4 h-screen bg-white z-20 opacity-100 overflow-y-scroll"
            id="noscroll"
          >
            <div className="w-full h-full flex flex-col">
              <header className="flex items-center justify-between mx-4 mt-2 mb-6">
                <h1 className="text-2xl">Shopping Cart</h1>
                <button
                  className="p-3 hover:bg-gray-300 hover:transition-all hover:duration-300 hover:shadow-lg text-2xl rounded-full"
                  onClick={closeCart}
                >
                  <IoMdClose />
                </button>
              </header>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
              {cartItems.length > 0 ? (
                <div className="mx-4 flex justify-end">
                  <h2 className="text-2xl font-bold">
                    {formatCurrency(
                      cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(
                          (item) => item.id === cartItem.id
                        );
                        return total + (item?.price || 0) * cartItem.quantity;
                      }, 0)
                    )}
                  </h2>
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
        </main>
      ) : (
        ""
      )}
    </>
  );
};

export default ShoppingCart;
