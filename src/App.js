import { Home, Library, Login } from "./components/pages";
import {  Route, Routes ,BrowserRouter } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="w-full h-full flex flex-col bg-bgBasic  justify-center text-center" >
      <header >
        <BrowserRouter>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
          <Route path="/library" element={<Library />} />
          {/* <Route path="/userProfile" element={<UserProfile />} /> */}
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
