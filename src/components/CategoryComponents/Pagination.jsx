import React, { useState } from "react";
import { Pagination, Stack, Grid, Box } from "@mui/material";
import Card from "../Card";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import pink from "../../assets/newArriavls/pink.png";
import StarIcon from "@mui/icons-material/Star";
import { getProductsByCate } from "../../lib/my-api";
import { useQuery } from "@tanstack/react-query";

function PaginatedList({ category }) {
  // const products = [
  //   {
  //     name: "Grande",
  //     type: "Blossom pouch",
  //     rating: 4,
  //     ratingsNum: 43,
  //     price: "$39.49",
  //     oldPrice: "$78.66",
  //     discountRate: "50% OFF",
  //     image: pink,
  //   },
  // ];

  const productsQuery = useQuery({
    queryKey: ["productsCate", "list"],
    queryFn: () => getProductsByCate(category),
  });
  const products = productsQuery.data?.products || [];

  const items = products.map((_, index) => `Item ${index + 1}`);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the items to display on the current page
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      component="div"
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={5} sx={{ width: "58%" }}>
        {currentItems.map((product, index) => (
          <Grid item xs={4} key={index} sx={{ width: 1 }}>
            <Card sx={{ width: 1 }}>
              <Box component="section" sx={{ width: 1 }}>
                <img
                  src={product.images[0].publicURL}
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
                    {products[0].name}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#626262",
                    }}
                  >
                    {products[0].type}
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box component="p" sx={{ color: "#FF8C4B", m: 0 }}>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        m: 0,
                        color: "#1B4B66",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "18px",
                      }}
                    >
                      {products[0].ratingsNum} Ratings
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "85%",
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "14px", md: "16px" },
                        color: "#171520",
                        mt: 0,
                      }}
                    >
                      {products[0].price}
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontWeight: "400",
                        fontSize: { xs: "14px", md: "14px" },
                        color: "#626262",
                        lineHeight: "20px",
                        textDecoration: "line-through",
                        mt: 0,
                      }}
                    >
                      {products[0].oldPrice}
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontWeight: "400",
                        fontSize: { xs: "14px", md: "16px" },
                        color: "#E21D1D",
                        lineHeight: "20px",
                        mt: 0,
                      }}
                    >
                      {products[0].discountRate}
                    </Box>
                  </Box>
                </Box>

                <Box component="p" sx={{ m: 0, mt: "5px" }}>
                  <FavoriteBorderOutlinedIcon />
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          shape="rounded"
          variant="outlined"
        />
      </Stack>
    </Box>
  );
}

export default PaginatedList;
