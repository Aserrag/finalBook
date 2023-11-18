import { Home, Library, Login,SignUp,BookInfo } from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MediaPlayer from "./components/items/mediaPlayer";
import { motion, AnimatePresence } from "framer-motion";
import { useStateValue } from "./Context/StateProvider";
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';



function App() {
  
   const [{ isAudiobookPlaying, bookData }, dispatch] = useStateValue();
  //  const navigate = useNavigate();

  //  useEffect(() => {
  //   if (window.localStorage.getItem("auth") === "true")
  //     navigate("/home", { replace: true });
  // }, []);


  return (
    <Router>
    <div className="h-auto flex items-center justify-center min-w-[680px] bg-Hcolor">
      <div className="w-full h-full flex flex-col justify-center text-center  bg-Hcolor">
        
      <section>
          <Routes>

            <Route path='/*' element={<Login />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/library' element={<Library />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/bookinfo/:bookId' element={<BookInfo />} />
            {/* <Route path="/userProfile" element={<UserProfile />} /> */}
          </Routes>
          </section>
      </div>

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
    </Router>
  );
}

export default App;
