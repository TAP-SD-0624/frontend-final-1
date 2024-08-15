import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import Breadcrumb from '../../components/ProductComponents/Breadcrumb ';
import ProductDetails from '../../components/ProductComponents/ProductDetails';
import ProductImage from '../../components/ProductComponents/ProductImage';
import QuantitySelector from '../../components/ProductComponents/QuantitySelector';
import ActionButtons from '../../components/ProductComponents/ActionButtons';
import TabsSection from '../../components/ProductComponents/TabsSection';
//import Tabs from './Tabs';

const Product = () => {
  return (
    <Container maxWidth="lg" sx={{m: 0, ml : "1%"}}>
      <Breadcrumb />
      <Grid container spacing={4} >
        <Grid item xs={12} md={6}  >
          <ProductImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDetails />
          <Box my={2}>
            <QuantitySelector showLabel={true}  />
          </Box>
          <ActionButtons/>
        </Grid>
      </Grid>
      <Box mt={4} sx={{mb : "24px" , width :"100%" , maxWidth :"1440px"}}>
        <TabsSection/>
      </Box>

    </Container>
  );
};

export default Product;







