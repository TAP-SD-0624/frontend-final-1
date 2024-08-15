import Summary from "../../components/CheckoutComponents/Summary";
import Information from "../../components/CheckoutComponents/Information";
import { Box, Link, Breadcrumbs, Stack, Typography } from "@mui/material";

const Checkout = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Checkout
    </Link>,
  ];
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "24px",
      }}
    >
      <Stack spacing={2} sx={{ width: "95%", mb: "24px" }}>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ color: "#1B4B66", fontSize: "16px", fontWeight: 500 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Typography
        variant="h1"
        sx={{
          width: "95%",
          fontSize: "34px",
          fontWeight: 600,
          lineHeight: "44px",
          color: "#1B4B66",
          mb: "44px",
        }}
      >
        Checkout
      </Typography>

      <Box
        component="div"
        sx={{
          width: "95%",
          minHeight: "545px",
          display: "flex",
          justifyContent: "space-between",
          mb: "150px",
        }}
      >
        <Information />
        <Summary />
      </Box>
    </Box>
  );
};

export default Checkout;
