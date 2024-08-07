import React from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../themes/theme';
import Zara from '../../assets/images/Zara.png';
import DG from '../../assets/images/DG.png';
import HM from '../../assets/images/HM.png';
import Chanel from '../../assets/images/Chanel.png';
import Biba from '../../assets/images/Biba.png';

const StyledImage = styled('img')(({ theme }) => ({
  aspectRatio: '1/1',
  width: '100%',
  objectFit: 'none',
  borderRadius: '16px',
  backgroundColor: '#f4f4f4',
}));

const BrandItem = ({ image }) => {
  return <StyledImage src={image} alt="brand item" />;
};

const Brands = () => {
  const brandImages = [Zara, DG, HM, Chanel, Biba];

  return (
    <Container
      sx={{
        paddingBottom: '67px',
        paddingTop: '67px',
        gap: 3,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
          gap: 1,
        },
      }}
      id="brands"
    >
      <Typography sx ={{fontSize: 32, fontWeight:600}}>Shop by Brands</Typography>
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(168px, 1fr))',
          rowGap: '46px',
          columnGap: '46px',
          justifyContent: 'space-between',
          [theme.breakpoints.down('sm')]: {
            rowGap: '24px',
            columnGap: '16px',
          },
          [theme.breakpoints.down('400')]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          },
        }}
      >
        {brandImages.map((image, index) => (
          <Box key={index} sx={{ width: '100%' }}>
            <BrandItem image={image} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Brands;
