import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import PanelLayout from "./components/layout/panelLayout";
function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Router>
      <Routes>
    
          <Route path="/" element={<Home />} />
   
      </Routes>
    </Router>
  );
}

export default App;
