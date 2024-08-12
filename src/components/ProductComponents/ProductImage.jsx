import React, { useState } from 'react';
import { Box, Paper, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import thumb6 from '../../assets/newArriavls/duffle.png';
import styles from "./ProductImage.module.scss";

const ProductImage = () => {
  const [index, setIndex] = useState(0);
  const thumbnails = [thumb6, thumb6, thumb6, thumb6];
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
