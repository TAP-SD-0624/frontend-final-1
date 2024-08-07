import React from "react";
import { Container, Typography, Link, Divider, Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { NavHashLink } from "react-router-hash-link";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youTube from "../assets/icons/youtube.svg";

const Footer = () => {

  return (
    <Container sx={{  backgroundColor : "#1b4b66"}} width="100%" maxWidth="1440px"> 

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ padding: "30px", paddingBottom: "70px" }}
        spacing={3}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, md: 10 }}>
          <Stack spacing={1}>
            <Typography sx={{ color: "white" }}>Shop by Category</Typography>
            <Link sx={{ color: "#B6B6B6", textDecoration : 'none' }}>Handbags</Link>
            <Link sx={{ color: "#B6B6B6",textDecoration : 'none' }}>Watches</Link>
            <Link sx={{ color: "#B6B6B6" ,textDecoration : 'none'}}>Skincare</Link>
            <Link sx={{ color: "#B6B6B6" ,textDecoration : 'none'}}>Jewelry</Link>
            <Link sx={{ color: "#B6B6B6" ,textDecoration : 'none' }}>Apparels</Link>
          </Stack>

          <Stack spacing={1}>
            <Typography sx={{ color: "white" }}>Shop by Products</Typography>
            <NavHashLink to="#featured" style={{ textDecoration: "none" }}>
              <Typography color="#B6B6B6">Featured</Typography>
            </NavHashLink>
            <NavHashLink to="#trendy" style={{ textDecoration: "none" }}>
              <Typography color="#B6B6B6">Trendy</Typography>
            </NavHashLink>
            <NavHashLink to="#brands" style={{ textDecoration: "none" }}>
              <Typography color="#B6B6B6">Brands</Typography>
            </NavHashLink>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "primary.tint",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Stack direction="row" gap={2} justifyContent={{ xs: "flex-start", sm: "flex-end" }} flexWrap="wrap">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={youTube} alt="youtube" />
          </Stack>

          <Stack spacing={0.5}>
            <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: "flex-start", sm: "flex-end" }}>
              <LocationOnOutlinedIcon sx={{ color: "white" }} fontSize="medium" />
              <Typography sx={{ color: "white" }}>United States</Typography>
            </Stack>
            <Typography sx={{ color: "#B6B6B6" }}>
              © 2021 | Cora Leviene All Rights Reserved
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
