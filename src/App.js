import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Home from "./Components/Home";
import Blue from "./Components/Blue";
import Red from "./Components/Red";

export const AppContext = createContext("dark");

const App = () => {
  return (
    
    <AppContext.Provider value={"light"}>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
