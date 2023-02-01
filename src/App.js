import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Main from "./components/Layout/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<HomePage />} path="/" exact />
                <Route element={<Main />} path="/main" exact />
              </Route>

              <Route element={<LoginPage />} path="/login" />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
