import "./styles.css";

//importing Pages
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Footer from "./Components/Footer";

// importing utilities
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

export default function App() {
  return (
    <div>
      <Navbar />

      <Box width="400px" sx={{ width: { xl: "1488" } }} m="auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}
