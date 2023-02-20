import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { FindPal } from "./components/FindPal/FindPal";
import { HomePage } from "./components/HomePage/HomePage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Premium } from "./components/Premium/Premium";
import { YourActivity } from "./components/YourActivity/YourActivity";
import { LoginPage } from "./components/Authorization/LoginPage";
import { RegisterPage } from "./components/Authorization/RegisterPage";
import { AuthContext } from "./components/Authorization/AuthContext";
import { JoinedActivities } from "./components/YourActivity/JoinedActivities/JoinedActivities";
import { useEffect, useState } from "react";
import { auth } from "./api/firebase";
import { ForgotPassword } from "./components/Authorization/ForgotPassword";

function App() {
  const [context, setContext] = useState();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(user);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setIsAuth(null);
        localStorage.removeItem("currentUser");
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-fitpal" element={<FindPal />} />
          <Route path="/my-fitpal" element={<YourActivity />} />
          <Route path="/joined" element={<JoinedActivities />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
