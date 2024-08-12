import Box from "@mui/material/Box";
import image1 from "../assets/category/hero.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PaginatedList from "../components/CategoryComponents/Pagination";

const Category = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Handbag
    </Link>,
  ];
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="section"
        sx={{
          width: "95%",
          minHeight: 400,
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "24px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
          mb: "40px",
        }}
      ></Box>
      <Stack spacing={2} sx={{ width: "55%", mb: "24px" }}>
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
          width: "55%",
          fontSize: "34px",
          fontWeight: 600,
          lineHeight: "44px",
          color: "#1B4B66",
          mb: "44px",
        }}
      >
        Handbags
      </Typography>
      <PaginatedList />
    </Box>
  );
};

export default Category;
