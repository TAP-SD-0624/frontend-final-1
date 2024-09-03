import React from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import CartTable from "../../components/MyCartComponents/CartTable";
import OrderSummary from "../../components/MyCartComponents/OrderSummary";
import CartHeader from "../../components/MyCartComponents/CartHeader ";
import { useCart } from "../../lib/Hooks/useCart";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const MyCart = () => {
  const { cart } = useCart();
  console.log(cart);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      const token = localStorage.getItem("token");
      return axios.delete(
        `https://backend-final-g1-955g.onrender.com/api/carts/product/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },

    onMutate: (id) => {
      queryClient.cancelQueries(["cart", "list"]);
      const previousCart = queryClient.getQueryData(["cart", "list"]);
      console.log(previousCart);
      queryClient.setQueryData(["cart", "list"], {
        ...previousCart,
        cart: {
          ...previousCart.cart,
          products: previousCart.cart.products.filter(
            (product) => product.id != id
          ),
        },
      });
      return { previousCart };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["cart", "list"], context.previousCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["cart", "list"]);
    },
  });

  const handleRemove = (id) => {
    mutation.mutate(id);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 10;
  const total = subtotal - discount;

  return (
    <Box sx={{ width: "100%", mb: 5 }}>
      <CartHeader />
      <Grid container>
        <Grid item xs={12} md={8}>
          <CartTable items={cart} onRemove={handleRemove} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderSummary subtotal={subtotal} discount={discount} total={total} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyCart;
