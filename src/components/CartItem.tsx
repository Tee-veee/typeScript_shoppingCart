// STATE
import { useShoppingCart } from "../context/ShoppingCartContext";
// REACT
import { FC } from "react";
// ICONS
import { IoMdClose } from "react-icons/io";
// DATA
import storeItems from "../data/items.json";
// FUNCTIONS
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const currentItem = storeItems.find((item) => item.id === id);
  if (currentItem == null) return null;

  return (
    <div className="p-4 flex w-12/12 ml-2 my-2 mr-2 bg-gray-50 hover:shadow-xl hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-300">
      <img
        src={currentItem.imgUrl}
        className="w-[300px] h-[120px] object-cover"
      />
      <div className="flex items-center justify-between w-full">
        <div className="ml-2 flex flex-col">
          <h2 className="text-md">
            {currentItem.name}{" "}
            <span className="text-sm text-gray-500">x{quantity}</span>
          </h2>
          <h3 className="text-sm">{formatCurrency(currentItem.price)}</h3>
        </div>
        <div className="flex items-center mr-2">
          <h3 className="mr-2">
            {formatCurrency(currentItem.price * quantity)}
          </h3>
          <button
            className="p-2 border-2 bg-white text-black border-blue-500 hover:transition-all hover:duration-300 hover:shadow-xl rounded-full"
            onClick={() => removeFromCart(currentItem.id)}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
