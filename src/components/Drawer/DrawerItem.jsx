import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import QuantitySelector from "../ProductComponents/QuantitySelector.jsx";
const DrawerItem = ({ imageSrc, itemName, itemDescription, quantity, price, onQuantityChange }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          
        }}
      >
        {/* Image of the item */}
        <img src={imageSrc} alt={itemName} style={{ width: '80px', height: 'auto', marginRight: 16 , borderRadius : "8px" }} />

        {/* Item details */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '20px' }}>
            {itemName}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#626262', marginBottom: 1 }}>
            {itemDescription}
          </Typography>

          {/* Quantity Selector and Price */}
          <Box sx={{ display: 'flex'  }}>
            <QuantitySelector showLabel={false} quantity={quantity} onQuantityChange={onQuantityChange} />
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '16px', marginLeft: 16 }}>
              ${price}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Divider between items */}
      <Divider sx={{ my: 3, mx : 3 }}/>
    </Box>
  );
};

export default DrawerItem;
