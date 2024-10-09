import { Box } from "@mui/material"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "35%" },
        }}
      >
        <Header />
        <Box sx={{ flexGrow: .5 }}>
          <Body />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
