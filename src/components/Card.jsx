import Box from "@mui/material/Box";

const Card = ({ children, sx }) => {
  return (
    <Box component="div" sx={{ ...sx }}>
      {children}
    </Box>
  );
};

export default Card;
