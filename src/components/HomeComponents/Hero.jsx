import Box from "@mui/material/Box";
import Button from "../Button";
import image1 from "../../assets/homeBackground.png";
import EastIcon from "@mui/icons-material/East";

const Hero = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          mt : "37px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom : "52px"
        }}
      >
        <Box
          component="section"
          sx={{
            width: "95%",
            minHeight : 400,
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "24px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="section"
            sx={{
              width: '50%',
              minHeight : "315px",
              backgroundColor: "rgba(222 , 222 , 222 , 0.7)",
              borderStartStartRadius: "24px",
              borderBottomLeftRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              
            }}
          >
            <Box
              component="section"
              sx={{
                width: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "self-start",
              }}
            >
              <Box
                component="h1"
                sx={{
                  width: "100%",
                  fontWeight: 800,
                  fontSize: "52px",
                  lineHeight: "84px",
                  color: "#1B4B66",
                  opacity: "100%",
                  m: 0,
                }}
              >
                Carry your Funk
              </Box>
              <Box
                component="p"
                sx={{
                  width: "100%",
                  fontWeight: 500,
                  fontSize: "29px",
                  lineHeight: "38px",
                  color: "#1B4B66",
                  opacity: "100%",
                  m: 0,
                }}
              >
                Trendy handbags collection for your party animal
              </Box>
            </Box>

            <Box sx={{ width: "95%" }}>
              <Button
                sx={{
                  minWidth: "180px",
                  backgroundColor: "#1B4B66",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                }}
              >
                <EastIcon sx={{ maxWidth: "24px", pr: 1 }} /> See
                More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
