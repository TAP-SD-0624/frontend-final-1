import { useQuery } from "@tanstack/react-query";
import { getCart } from "../my-api";

export const useCart = () => {
  const cartQuery = useQuery({
    queryKey: ["cart", "list"],
    queryFn: getCart,
  });
  const cart = cartQuery.data?.cart?.products || [];
  return { cart };
};
