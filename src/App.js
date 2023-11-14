import { Home, Library, Login } from "./components/pages";
import {  Route, Routes ,BrowserRouter } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
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
