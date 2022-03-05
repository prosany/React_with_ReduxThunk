import ForgetPassword from "../Pages/Authentications/ForgetPassword";
import Login from "../Pages/Authentications/Login";
import Registration from "../Pages/Authentications/Registration";
import Home from "../Pages/Private/Home";
import Profile from "../Pages/Private/Profile";
import Error from "../Pages/Public/Error";

const publicRoute = [
  { path: "/login", component: Login },
  { path: "/registration", component: Registration },
  { path: "/forget-password", component: ForgetPassword },
];

const privateRoute = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
];

const errorRoute = [{ path: "*", component: Error }];

export { publicRoute, privateRoute, errorRoute };
