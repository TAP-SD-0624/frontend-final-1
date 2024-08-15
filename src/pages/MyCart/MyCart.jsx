import React from 'react';
import { Box, Grid } from '@mui/material';
import CartTable from '../../components/MyCartComponents/CartTable';
import OrderSummary from '../../components/MyCartComponents/OrderSummary';
import ProductImage1 from '../../assets/newArriavls/duffle.png';
import ProductImage2 from '../../assets/newArriavls/brown.png';
import ProductImage3 from '../../assets/newArriavls/pink.png';
import CartHeader from '../../components/MyCartComponents/CartHeader ';


const MyCart = () => {
    const cartItems = [
        {id: 1, name: 'Product 1', description: 'Description of Product 1', image: ProductImage1, price: 36.99, quantity: 1, subtotal: 29.99},
        {id: 2, name: 'Product 2', description: 'Description of Product 2', image: ProductImage2, price: 49.99, quantity: 2, subtotal: 99.98},
        {id: 3, name: 'Product 3', description: 'Description of Product 3', image: ProductImage3, price: 29.99, quantity: 3, subtotal: 99.98}
    ];

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = 10;  
    const total = subtotal - discount;

    return (
        <Box sx={{ width: '100%'}}>
            <CartHeader/>
            <Grid container >
                <Grid item xs={12} md={8}>
                    <CartTable items={cartItems} onRemove={handleRemove}/>
                </Grid>
                <Grid item xs={12} md={4} >
                    <OrderSummary subtotal={subtotal} discount={discount} total={total} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyCart;
