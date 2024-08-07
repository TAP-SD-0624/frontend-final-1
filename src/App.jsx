import Hero from "./components/HomeComponents/Hero";
import NewArrivals from "./components/HomeComponents/NewArrivals";
import HandiPicked from "./components/HomeComponents/Handipicked";
import Cards from "./components/HomeComponents/Cards";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        minwidth: 1440,
        height: 2939,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Hero />
      <NewArrivals />
      <HandiPicked />
      <Cards />
    </Container>
  );
}

export default App;
