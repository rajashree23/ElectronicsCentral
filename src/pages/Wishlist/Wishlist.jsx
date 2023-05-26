import { useDataContext } from "../../context/data/DataContext";
import { WishlistCard } from "./component/WishlistCard";

export const Wishlist = () => {
  const { wishlist } = useDataContext();

  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 && <h2>Your wishlist is empty!</h2>}
      <div>
        {wishlist.map((product) => (
          <WishlistCard key={product.id} product={product}></WishlistCard>
        ))}
      </div>
    </div>
  );
};
