import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import image1 from "../../assets/newArriavls/duffle.png";
import { getCart } from "../../lib/my-api";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const Summary = () => {
  const cartQuery = useQuery({
    queryKey: ["cart", "list"],
    queryFn: getCart,
  });
  const cart = cartQuery.data?.cart.products || [];
  console.log(cart);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 10;
  const total = subtotal - discount;

  return (
    <Box component="div" sx={{ width: "35%", height: "100%" }}>
      <Box component="div" sx={{ minHeight: "60px", mb: "12px" }}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "26px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Order Summary
        </Typography>
        <Divider textAlign="center" />
      </Box>
      <Box
        component="div"
        sx={{ width: "100%", minHeight: "242px", mb: "24px" }}
      >
        {cart.map((product) => {
          return (
            <Box
              component="div"
              sx={{ minHeight: "97px", display: "flex", mb: "24px" }}
            >
              <Box
                component="img"
                sx={{
                  width: "75px",
                  height: "80px",
                  ml: "5px",
                  borderRadius: "5px",
                }}
                src={product.images && product.images[0]?.publicURL}
              ></Box>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  maxHeight: "80px",
                  ml: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#626262",
                  }}
                >
                  {product.description}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#626262",
                  }}
                >
                  Qty-{product.quantity}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box component="div" sx={{ minHeight: "195px" }}>
        <Box component="div" sx={{ minHeight: "60px" }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "26px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Order Details
          </Typography>
          <Divider textAlign="center" />
        </Box>
        <Box component="div">
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#626262",
              }}
            >
              Sub Total
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              ${subtotal.toFixed(2)}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#626262",
              }}
            >
              Discount
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              -${discount}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#626262",
              }}
            >
              Delivery Fee
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              -$0.00
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              Grand Total
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              ${total.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
