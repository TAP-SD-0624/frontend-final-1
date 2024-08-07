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
      }}
    >
      <Box
        component="section"
        sx={{
          width: "95%",
          mb: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pl: { xs: "16px", sm: "24px", md: "40px" },
        }}
      >
        <Box
          component="h1"
          sx={{
            m: 0,
            fontWeight: 600,
            fontSize: { xs: "24px", md: "34px" },
            lineHeight: { xs: "32px", md: "44px" },
          }}
        >
          New Arrivals
        </Box>
        <Button
          href="#"
          sx={{
            color: "#1B4B66",
            fontSize: { xs: 12, md: 14 },
            fontWeight: 600,
            mb: "20px",
          }}
        >
          View all <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ width: 1, pl: { xs: "16px", sm: "24px", md: "40px" } }}
      >
        {data.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ width: 1 }}>
            <Box component="section" sx={{ width: 1 }}>
              <Box component="section" sx={{ width: 1 }}>
                <img
                  src={product.image}
                  style={{
                    width: "100%",
                    height: "285px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box
                component="section"
                sx={{
                  width: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Box component="div" sx={{ width: "90%" }}>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#171520",
                      mt: "5px",
                      mb: "2px",
                    }}
                  >
                    {product.product}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#626262",
                    }}
                  >
                    {product.type}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#171520",
                      mt: 0,
                    }}
                  >
                    {product.price}
                  </Box>
                </Box>
                <Box component="p" sx={{ m: 0, mt: "5px" }}>
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
