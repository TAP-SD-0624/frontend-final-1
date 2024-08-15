
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

// ==================================================
import {React,useState} from 'react';
import { Drawer, Box, IconButton, Typography , TextField,Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import product1 from "../../assets/newArriavls/duffle.png";
import DrawerItem from './DrawerItem';

const CartDrawer = ({ open, onClose }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      imageSrc: product1,
      itemName: 'Coach',
      itemDescription: 'Leather Coach Bag',
      quantity: 1,
      price: 99.99,
    },
    {
      id: 2,
      imageSrc: product1,
      itemName: 'Coach',
      itemDescription: 'Leather Coach Bag',
      quantity: 2,
      price: 199.99,
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleBackClick = () => {
    onClose();
  };
  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10); // Example: 10% discount
    } else {
      setDiscount(0); // No discount
    }
  };
  // Calculate totals
  const calculateSubtotal = () => items.reduce((total, item) => total + item.price * item.quantity, 0);
  const calculateTax = (subtotal) => subtotal * 0.1; // Example: 10% tax
  const calculateTotal = (subtotal, tax) => subtotal + tax;

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      transitionDuration={{ enter: 150, exit: 150 }} 
      sx={{ 
        '& .MuiDrawer-paper': {
          top: '80px',
          height: 'auto',
          maxHeight: '80%',
          width: { xs: '100%', sm: 400 }, 
          boxSizing: 'border-box',
          transition: 'transform 150ms ease-in-out', 
        },
      }}
    >
      <Box
        sx={{
          padding :3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Back button with Arrow */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={handleBackClick} sx={{ mr: 1 ,color: '#1B4B66',}}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#1B4B66' }}>
            Back
          </Typography>
        </Box>

        
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection : "column",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {items.map((item) => (
            <DrawerItem
              key={item.id}
              imageSrc={item.imageSrc}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
              quantity={item.quantity}
              price={item.price}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            />
          ))}
        </Box>
            <Box sx={{ my: 2 }}>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx ={{fontSize : "14px", fontWeight :  400}}>Subtotal:</Typography>
                <Typography variant="body1" sx ={{fontSize : "14px", fontWeight :  400}}>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1}}>
                <Typography variant="body1" sx ={{fontSize : "14px", fontWeight :  400}}>Tax:</Typography>
                <Typography variant="body1" sx ={{fontSize : "14px", fontWeight :  400}}>${tax.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                <Typography variant="body1" sx ={{fontSize : "14px", fontWeight :  400}}>Total:</Typography>
                <Typography variant="body1" sx ={{fontSize : "14px", fontWeight :  400}}>${total.toFixed(2)}</Typography>
              </Box>
          </Box>


          <Box sx={{display: 'flex', alignItems: 'center',backgroundColor : "#F1F1F1", width :"80%", px : "8px" , margin : "0 auto "}}>
          <TextField
            placeholder="Apply Coupon Code"
            variant="standard"
            fullWidth
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            InputProps={{
              disableUnderline: true,
              sx: {
                padding: '8px 0',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#626262',
                '&::placeholder': {fontWeight: 500,fontSize : "16px"},
                
              },
            }}
          />
          <Button
            onClick={handleApplyCoupon}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
              color: '#1B4B66',
              marginLeft: 1,
              padding: 0,
            }}
          >
            Check
          </Button>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1B4B66',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '16px',
              padding: '4px 0',
              '&:hover': {
                backgroundColor: '#143A4F',
              },
            }}
          >
            Place Order
          </Button>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              textDecoration: 'underline',
              color: '#1B4B66',
              cursor: 'pointer',
              fontWeight: 600,
            }}
            onClick={onClose}
          >
            Continue Shopping
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;









//=======================================================================
import React, { useState } from 'react';
import { Box, Paper, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import thumb6 from '../../assets/newArriavls/duffle.png';
import thumb7 from '../../assets/newArriavls/pink.png';
import styles from "./ProductImage.module.scss";

const ProductImage = () => {
  const [index, setIndex] = useState(0);
  const thumbnails = [thumb6, thumb6, thumb6, thumb6, thumb7];
  const visibleThumbnails = thumbnails.slice(index, index + 4);

  return (
    <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Paper elevation={0} sx={{ flexShrink: 0 }}>
        <img
          src={thumb6}
          alt="Product"
          style={{
            maxHeight: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: '16px',
            maxWidth: '530px',
          }}
        />
      </Paper>
      <Box className={styles.container} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 ,flexWrap : "nowrap"}}>
        <IconButton onClick={() => setIndex((prev) => Math.max(prev - 1, 0))} sx={{ p: 1 }}>
          <ChevronLeft />
        </IconButton>
        <Box className={styles.imagesContainer} sx={{ display: 'flex', justifyContent: 'center' }}>
          {visibleThumbnails.map((thumb, idx) => (
            <img key={idx} src={thumb} width="55px" className={styles.image} />
          ))}
        </Box>
        <IconButton onClick={() => setIndex((prev) => Math.min(prev + 1, thumbnails.length - 4))} sx={{ p: 1 }}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductImage;


//===================================================================================

import React from 'react';
import { Box , Grid} from '@mui/material';
import CartHeader from '../../components/MyCartComponents/CartHeader ';
import CartTable from '../../components/MyCartComponents/CartTable';
import ProductImage1 from '../../assets/newArriavls/duffle.png';
import ProductImage2 from '../../assets/newArriavls/brown.png';
import ProductImage3 from '../../assets/newArriavls/pink.png';
import OrderSummary from '../../components/MyCartComponents/OrderSummary';
const MyCart = () => {
    const cartItems = [
        {id: 1, name: 'Product 1',
            description: 'Description of Product 1',
            image: ProductImage1,
            price: 36.99, quantity: 1, subtotal: 29.99
        },
        {id: 2,
            name: ' Product 2',
            description: 'Description of Product 2',
            image: ProductImage2,
            price: 49.99, quantity: 2, subtotal: 99.98
        },
        {id: 2,
            name: ' Product 3',
            description: 'Description of Product 3',
            image: ProductImage3,
            price: 29.99, quantity: 3, subtotal: 99.98
        }
      ];
      const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
      };
      const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const discount = 10;  
      const total = subtotal - discount;
    return (
        <Box sx={{ maxWidth: "100%",m :0, mt: 3 ,ml : "3%" }}>
            <CartHeader />
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <CartTable items={cartItems} onRemove={handleRemove} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <OrderSummary subtotal={subtotal} discount={discount} total={total} />
                    </Grid>
                </Grid>
            
        </Box>
       
    );
};

export default MyCart;
 //=-=========================================================================


 import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, Stack, Box, Typography } from '@mui/material';

const CartTable = ({ items, onRemove }) => {
  return (
    <TableContainer sx={{mb : 8 , width :"100%"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ borderBottom: '0.1px solid #626262', color: "#626262", fontWeight: "bold", fontSize: "16px" }}>Product Name</TableCell>
            <TableCell align="center" sx={{ borderBottom: '0.1px solid #626262', color: "#626262", fontWeight: "bold", fontSize: "16px" }}>Price</TableCell>
            <TableCell align="center" sx={{ borderBottom: '0.1px solid #626262', color: "#626262", fontWeight: "bold", fontSize: "16px" }}>Qty</TableCell>
            <TableCell align="center" sx={{ borderBottom: '0.1px solid #626262', color: "#626262", fontWeight: "bold", fontSize: "16px" }}>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
                <TableCell align="left" sx={{ borderBottom: 'none' }}>
                    <Stack direction="row" spacing={2}>
                        <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1 }}
                        />
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 'bold'  , fontSize : "14px" }}>{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary" >{item.description}</Typography>
                            <Typography variant="body2" color="#626262">Qty- {item.quantity}</Typography>
                        </Box>
                    </Stack>
              </TableCell>
              <TableCell  align="center" sx={{ borderBottom: 'none' ,fontWeight : "400" , fontSize : "14px"}}>${item.price}</TableCell>
              <TableCell align="center" sx={{ borderBottom: 'none' , fontWeight : "400" , fontSize : "14px"}}>{item.quantity}</TableCell>
              <TableCell align="center" sx={{ borderBottom: 'none' , display : "flex" , flexDirection : "column" , alignItems : "center", fontWeight : "400" , fontSize : "14px"}}>
                ${item.subtotal}{' '}
                <Link component="button" variant="body2"
                sx={{
                    color: '#B00020',
                    fontWeight : 600,
                    mt : "15px",
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                    textDecorationColor: '#B00020',
                    '&:hover': {
                      textDecorationColor: '#B00020',
                    }
                  }} 
                  onClick={() => onRemove(item.id)}>
                  Remove
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable;
// ============================================================


import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

const OrderSummary = ({ subtotal, discount, total }) => (
  <Box sx={{ p: 2, mt: 2, borderRadius: 2 }}>
    <Typography variant="h5" sx ={{ fontWeight: "600", fontSize : "20px"}}>Order Summary</Typography>
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
      <Typography variant="h6" sx={{fontWeight : 600, fontSize : "16px"}}>Grand Total</Typography>
      <Typography variant="h6" sx={{fontWeight : 600, fontSize : "16px"}}>${total}</Typography>
    </Box>
    <Box  sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
      <Button variant="contained" sx={{color: '#ffffff',backgroundColor: "#1B4B66",borderRadius: "8px", fontSize :"14px",width :"100%", p:0}}>Place Order</Button>
      <Button variant="outlined" sx={{backgroundColor: '#ffffff', color: '#1B4B66' , border: "2px solid #1B4B66" ,fontSize :"14px", borderRadius: "8px",width :"100%"}}>Continue Shopping</Button>
    </Box>

  </Box>
);

export default OrderSummary;

