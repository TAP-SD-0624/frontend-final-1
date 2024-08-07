import Box from "@mui/material/Box";
import Button from "../Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import pink from "../../assets/newArriavls/pink.png";
import duffle from "../../assets/newArriavls/duffle.png";
import brown from "../../assets/newArriavls/brown.png";
import black from "../../assets/newArriavls/black.png";

const NewArrivals = () => {
  const data = [
    {
      product: "Grande",
      type: "Blossom Pouch",
      price: "$39.49",
      image: pink,
    },
    {
      product: "Coach",
      type: "Leather Coach Bag",
      price: "$54.69",
      image: duffle,
    },
    {
      product: "Remus",
      type: "Brown Strap Bag",
      price: "$57.00",
      image: brown,
    },
    {
      product: "Boujee",
      type: "Black Bag",
      price: "$56.49",
      image: black,
    },
  ];
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: 475,
        position: "absolute",
        top: 569,
      }}
    >
      <Box
        component="section"
        sx={{
          width: "95%",
          height: "10%",
          mb: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pl: "40px",
        }}
      >
        <Box
          component="h1"
          sx={{ m: 0, fontWeight: 600, fontSize: "34px", lineHeight: "44px" }}
        >
          New Arrivals
        </Box>
        <Button
          href="#"
          sx={{
            color: "#1B4B66",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
          }}
        >
          View all <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ width: 1, height: "407px", pl: "40px" }}
      >
        {data.map((product) => (
          <Grid item xs={3} sx={{ width: 1, height: 1 }}>
            <Box component="section" sx={{ width: 1, height: 1 }}>
              <Box component="section" sx={{ width: 1, height: "70%" }}>
                <img
                  src={product.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box
                component="section"
                sx={{
                  width: 1,
                  height: "30%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Box component="div" sx={{ width: "90%" }}>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#171520",
                    }}
                  >
                    {product.product}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#626262",
                    }}
                  >
                    {product.type}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#171520",
                    }}
                  >
                    {product.price}
                  </Box>
                </Box>
                <Box component="p">
                  <FavoriteBorderOutlinedIcon />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewArrivals;
