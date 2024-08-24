import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Grid, Container, Box } from "@mui/material";
import Breadcrumb from "../../components/ProductComponents/Breadcrumb ";
import ProductDetails from "../../components/ProductComponents/ProductDetails";
import ProductImage from "../../components/ProductComponents/ProductImage";
import QuantitySelector from "../../components/ProductComponents/QuantitySelector";
import ActionButtons from "../../components/ProductComponents/ActionButtons";
import TabsSection from "../../components/ProductComponents/TabsSection";
import { getProduct } from "../../lib/my-api";
//import Tabs from './Tabs';

const Product = () => {
  let { productId } = useParams();

  const productQuery = useQuery({
    queryKey: ["product", "list"],
    queryFn: () => getProduct(productId),
  });
  const product = productQuery.data?.product || [];
  console.log(product);

  return (
    <Container maxWidth="1440px" sx={{ m: 0, ml: "1%" }}>
      <Breadcrumb product={product} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ProductImage product={product} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDetails product={product} />
          <Box my={2}>
            <QuantitySelector showLabel={true} />
          </Box>
          <ActionButtons product={product} />
        </Grid>
      </Grid>
      <Box mt={4} sx={{ mb: "24px", width: "100%", maxWidth: "1440px" }}>
        <TabsSection />
      </Box>
    </Container>
  );
};

export default Product;
