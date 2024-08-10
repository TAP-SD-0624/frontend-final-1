import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Personal from "../../assets/Hand/personal.jpeg";
import Hand from "../../assets/Hand/Hand.png";
import Watch from "../../assets/Hand/watch.png";
import Glasses from "../../assets/Hand/glasses.png";

const HandiPicked = ({ id }) => {
  const data = [
    {
      type: "Personal Care",
      image: `${Personal}`,
    },
    {
      type: "Handbags",
      image: `${Hand}`,
    },
    {
      type: "Wrist Watches",
      image: `${Watch}`,
    },
    {
      type: "Sun Glasses",
      image: `${Glasses}`,
    },
  ];
  return (
    <Box id={id}
      component="section"
      sx={{
        width: "100%",
        minHeight: "422px",
        backgroundColor: "#1B4B66",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          pl: "40px",
        }}
      >
        <Box
          component="h1"
          sx={{
            width: 1,
            fontWeight: 600,
            fontSize: "34px",
            lineHeight: "44px",
            color: "#FFFFFF",
            m: 0,
            mb : '16px'
          }}
        >
          Handpicked Collection
        </Box>
        <Grid container spacing={5} sx={{ width: 1, minHeight: "280px" }}>
          {data.map((product) => (
            <Grid item xs={3} sx={{ width: 1, height: 1 }}>
              <Box
                component="div"
                sx={{
                  width: 1,
                  minHeight: "280px",
                  backgroundImage: `url(${product.image})`,
                  borderRadius: "20px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  component="h1"
                  sx={{
                    width: 1,
                    height: "114px",
                    m: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    pl: "20px",
                    pb: "25px",
                    background:
                      "linear-gradient(to bottom,  rgba(196, 196, 196, 0), rgba(3, 24, 26, 0.46))",
                    borderRadius: "20px",
                  }}
                >
                  {product.type}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HandiPicked;
