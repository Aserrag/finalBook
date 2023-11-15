import { Home, Library, Login } from "./components/pages";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import MediaPlayer from "./components/items/mediaPlayer";
import { motion, AnimatePresence } from "framer-motion";



function App() {
  return (
    <div className="h-auto flex items-center justify-center min-w-[680px]" >
      <header className="w-full h-full flex flex-col bg-bgBasic  justify-center text-center">
        <BrowserRouter>
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Home />} />
            <Route path="/library" element={<Library />} />
            {/* <Route path="/userProfile" element={<UserProfile />} /> */}
          </Routes>
        </BrowserRouter>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed min-w-[700px] h-26  inset-x-0 bottom-0  bg-gray-700 drop-shadow-2xl backdrop-blur-md flex flex-wrap justify-center items-center`}
      >
        <MediaPlayer />
      </motion.div>
    </div>
  );
}

export default App;
