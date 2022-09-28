import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={""}></Route>
            <Route path="/signup" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
