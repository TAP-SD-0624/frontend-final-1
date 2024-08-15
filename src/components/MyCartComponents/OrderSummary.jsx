import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

const OrderSummary = ({ subtotal, discount, total }) => (
  <Box sx={{ m:0, mt: 2,maxWidth: '415px'}}>
    <Typography variant="h5" sx={{ fontWeight: '600', fontSize: { xs: '18px', sm: '20px' } }}>Order Summary</Typography>
    <Divider sx={{ my: 1 }} />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body1" color="#626262">Sub Total</Typography>
      <Typography variant="body1">${subtotal}</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body1" color="#626262">Discount</Typography>
      <Typography variant="body1">-${discount}</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body1" color="#626262">Delivery Fee</Typography>
      <Typography variant="body1">-$0</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: '600', fontSize: { xs: '14px', sm: '16px' } }}>Grand Total</Typography>
      <Typography variant="h6" sx={{ fontWeight: '600', fontSize: { xs: '14px', sm: '16px' } }}>${total}</Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
      <Button 
        variant="contained" 
        sx={{ 
          color: '#ffffff',
          fontWeight : "bold", 
          backgroundColor: "#1B4B66", 
          borderRadius: "8px", 
          fontSize: { xs: '12px', sm: '14px' }, 
          flex: 1, 
          
        }}
      >
        Place Order
      </Button>
      <Button 
        variant="outlined" 
        sx={{ 
          backgroundColor: '#ffffff', 
          color: '#1B4B66', 
          fontWeight : "bold",
          border: "2px solid #1B4B66", 
          fontSize: { xs: '11px', sm: '13px' }, 
          borderRadius: "8px", 
          flex: 1 
        }}
      >
        Continue Shopping
      </Button>
    </Box>
  </Box>
);

export default OrderSummary;
