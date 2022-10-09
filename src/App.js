import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Portfolio from "./pages/home/Portfolio";
import { useState } from "react";
import { AuthProvider } from "./provider";

function App() {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  const contextValue = { token, setToken, userName, setUserName };
  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={contextValue}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={""}></Route>
              <Route path="/signin" element={<Login />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path="/:username" element={<Portfolio />}></Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
