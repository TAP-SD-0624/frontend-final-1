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
        position: "absolute",
        top: "1890px",
        width: "95%",
        height: "668px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="div"
        sx={{
          width: 1,
          height: "400px",
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
            width: "40%",
            height: "50%",
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
              width: "200px",
              height: "50px",
              fontWeight: 400,
              fontSize: "30px",
              lineHeight: "20px",
              color: "#97451F",
              m: 0,
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
              width: "618px",
              height: "136px",
              fontWeight: 700,
              fontSize: "52px",
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
          width: 1,
          height: "228px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "49%",
            height: 1,
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
              height: "90%",
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
                width: "70%",
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
            height: 1,
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
              width: "40%",
              height: "90%",
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
