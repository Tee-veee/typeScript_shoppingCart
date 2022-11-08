// DATA
import storeItems from "../data/items.json";
// COMPONENTS
import StoreItem from "../components/StoreItem";

function Store() {
  return (
    <div className="grid grid-cols-1 gap-4 pt-12 mx-4 xl:grid-cols-3 lg:grid-cols-2 lg:grid-rows-2 xl:grid-rows-3 xl:gap-12">
      {storeItems.map((item) => {
        return <StoreItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Store;
