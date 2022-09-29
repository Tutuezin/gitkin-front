import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Portfolio from "./pages/home/Portfolio";

function App() {
  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={""}></Route>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/portfolio/:username" element={<Portfolio />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
