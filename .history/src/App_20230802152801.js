import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/SignInPage";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import PostDetailsPage from "./module/Post/PostDetails/PostDetailsPage";
import DashboardPage from "./pages/dashboardPage.js/DashboardPage";
import DashboardLayout from "./module/dashboard/DashboardLayout";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/:slug" element={<PostDetailsPage />}></Route>
        </Routes>
        {/* <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Route> */}
      </AuthProvider>
    </div>
  );
}

export default App;
