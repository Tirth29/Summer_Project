import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
// import SearchBar from "./Components/SearchBar";
import Refreshment from "./Screens/Refreshment";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div>
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/home" element={<Sample/>} />
          <Route path="/opportunity" element={<Sample />} />
          <Route path="/post" element={<Sample />} />
          <Route path="/refreshment" element={<Refreshment/>} />
          <Route path="/profile" element={<Sample />} />
        </Routes>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
