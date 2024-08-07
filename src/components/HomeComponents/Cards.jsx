import Box from "@mui/material/Box";
import Button from "../Button";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import EastIcon from "@mui/icons-material/East";
import { border, borderRadius } from "@mui/system";

const Cards = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "95%",
        minHeight: "668px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems : "center",
        mt:'88px'
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "400px",
          backgroundImage: `url(${card1})`,
          borderRadius: "20px",
          backgroundRepeat: "round",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            pl: "40px",
          }}
        >
          <Box
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: "30px",
              lineHeight: "20px",
              color: "#97451F",
              m: 0,
              mb : "23px" ,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Limited Edition
          </Box>
          <Box
            component="h1"
            sx={{
              maxWidth: "618px",
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "68px",
              color: "#97451F",
              m: 0,
            }}
          >
            Limited Edition Products From Top Brands
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "228px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "49%",
            minHeight: "100%",
            backgroundImage: `url(${card2})`,
            backgroundRepeat: "round",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "40%",
              minHeight: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              pr: "40px",
            }}
          >
            <Box
              component="h1"
              sx={{
                m: 0,
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "52px",
                color: "#A53F64",
                textAlign: "end",
                width: "100%",
              }}
            >
              15% off and more!
            </Box>
            <Button
              sx={{
                height: "60px",
                background: "#F1F1F1",
                borderRadius: "50%",
                p: 0,
              }}
            >
              <EastIcon
                sx={{ p: 0, width: "50%", height: 1, color: "#A53F64" }}
              />
            </Button>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: "49%",
            minHeight: "100%",
            backgroundImage: `url(${card3})`,
            backgroundRepeat: "round",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "50%",
              minHeight: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              pr: "40px",
            }}
          >
            <Box
              component="h1"
              sx={{
                m: 0,
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "52px",
                color: "#1B4B66",
                textAlign: "end",
                width: "100%",
              }}
            >
              Popular in the community!
            </Box>
            <Button
              sx={{
                height: "60px",
                background: "#F1F1F1",
                borderRadius: "50%",
                p: 0,
              }}
            >
              <EastIcon
                sx={{ p: 0, width: "50%", height: 1, color: "#1B4B66" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
