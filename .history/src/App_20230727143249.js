import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/SignInPage";
import HomePage from "./pages/homepage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
