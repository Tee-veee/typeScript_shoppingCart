import { FC } from "react";
// CONTEXT
import { useShoppingCart } from "../context/ShoppingCartContext";
// UTILS
import { formatCurrency } from "../utilities/formatCurrency";

// TS PROPS TYPE
interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="bg-white shadow-md border-gray-100 border-1 hover:shadow-lg hover:transition-all hover:duration-300 flex flex-col items-center ">
      <img src={imgUrl} className="object-cover h-[250px] w-full" />
      <div className="flex w-full  justify-between items-center py-2 px-6">
        <h1 className="text-xl">{name}</h1>
        <h2 className="text-gray-500">{formatCurrency(price)}</h2>
      </div>
      <div className="w-full mt-auto py-2 px-6">
        {quantity === 0 ? (
          <button
            className="w-full bg-blue-500 rounded-md text-white p-2 hover:scale-[0.95] hover:transition-all hover:ease-in-out hover:duration-300"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex flex-col">
            <div className="w-1/2 mx-auto flex items-center justify-between">
              <button
                className="border-2 border-blue-500  rounded-md flex items-center justify-center p-2 hover:scale-[0.95] hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-blue-500  hover:text-white text-xl h-12 w-12"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <h3 className="font-bold text-xl">
                {quantity}
                <span className="font-normal text-lg"> in cart</span>
              </h3>
              <button
                className="border-2 border-blue-500  rounded-md flex items-center justify-center p-2 hover:scale-[0.95] hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-blue-500  hover:text-white text-xl h-12 w-12"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="border-2 border-red-500 bg-red-500 mt-4 w-full  rounded-md flex items-center justify-center p-2 hover:scale-[0.95] hover:transition-all hover:ease-in-out hover:duration-300 text-white text-md h-12"
              onClick={() => removeFromCart(id)}
            >
              Remove from cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
