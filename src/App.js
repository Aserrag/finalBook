import { Home, Library, Login,SignUp,BookInfo, Profile  } from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MediaPlayer from "./components/items/mediaPlayer";
import { motion, AnimatePresence } from "framer-motion";
import Header, { ComplexNavbar } from "./components/items/header";
import Bookpage from './components/pages/bookpage';
import PrimarySearchAppBar from "./components/items/header";






function App() {
  



  return (
    <Router>
      <PrimarySearchAppBar />
    <div className="h-auto flex items-center justify-center min-w-[680px] bg-white">
      <div className="w-full h-full flex flex-col justify-center text-center  bg-white">
        
      <section>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/library/:uid/:token' element={<Library />} />
            {/* <Route path='/bookinfo/:bookId' element={<BookInfo />} /> */}
            <Route path="/books/:id" element={<Bookpage />} />
            <Route path='/profile' element={<Profile />} />


            {/* <Route path="/userProfile" element={<UserProfile />} /> */}
          </Routes>
          </section>
      </div>

      
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed min-w-[100px] h-26 inset-x-10 bottom-0 bg-white drop-shadow-2xl backdrop-blur-md rounded-lg`}
        >
          <MediaPlayer />
        </motion.div>
     */}

      
    </div>
    </Router>
  );
}

export default App;
