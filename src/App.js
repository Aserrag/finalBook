import { Home, Library, Login } from "./components/pages";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import MediaPlayer from "./components/items/mediaPlayer";
import { motion, AnimatePresence } from "framer-motion";
import { useStateValue } from "./Context/StateProvider";

function App() {
   const [{ isAudiobookPlaying, bookData }, dispatch] = useStateValue();


  return (
    <div className="h-auto flex items-center justify-center min-w-[680px]">
      <header className="w-full h-full flex flex-col justify-center text-center">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Home />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </BrowserRouter>
      </header>

      {/* {isAudiobookPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed min-w-[100px] h-26 inset-x-10 bottom-0 bg-white drop-shadow-2xl backdrop-blur-md rounded-lg`}
        >
          <MediaPlayer book={bookData}  />
        </motion.div>
      )} */}
    </div>
  );
}

export default App;
