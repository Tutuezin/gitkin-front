import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={""}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/signin" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
