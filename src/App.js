import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/SignInPage";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import PostDetailsPage from "./module/Post/PostDetails/PostDetailsPage";
import DashboardLayout from "./module/dashboard/DashboardLayout";
import PostMange from "./module/Post/postManage/PostMange";
import PostAddNew from "./module/Post/postAddNew/PostAddNew";
import CategoryAddNew from "./module/category/CategoryAddNew";
import UserAddNew from "./module/user/UserAddNew";
import UserManage from "./module/user/UserManage";
import CategoryManage from "./module/category/CategoryManage";
import UserProfile from "./module/user/UserProfile";
import CategoryUpdate from "./module/category/CategoryUpdate";
import UserUpdate from "./module/user/UserUpdate";
import PostUpdate from "./module/Post/postUpdate/PostUpdate";
import BannerPage from "./pages/bannerPage/BannerPage";

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
          <Route
            path="/banner-page"
            element={<BannerPage></BannerPage>}
          ></Route>
          <Route element={<DashboardLayout />}>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/manage/posts" element={<PostMange />}></Route>
            <Route path="/manage/update-post" element={<PostUpdate />}></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>
            <Route
              path="/manage/add-category"
              element={<CategoryAddNew></CategoryAddNew>}
            ></Route>
            <Route
              path="/manage/update-category/"
              element={<CategoryUpdate></CategoryUpdate>}
            ></Route>
            <Route
              path="/manage/category"
              element={<CategoryManage></CategoryManage>}
            ></Route>
            <Route
              path="/manage/add-user"
              element={<UserAddNew></UserAddNew>}
            ></Route>
            <Route
              path="/manage/user"
              element={<UserManage></UserManage>}
            ></Route>
            <Route
              path="/manage/update-user"
              element={<UserUpdate></UserUpdate>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
