import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Signupnext = React.lazy(() => import("pages/Signupnext"));
const Signup = React.lazy(() => import("pages/Signup"));
const Forgotpassword = React.lazy(() => import("pages/Forgotpassword"));
const Login = React.lazy(() => import("pages/Login"));
const Earrings = React.lazy(() => import("pages/Earrings"));
const Cart = React.lazy(() => import("pages/Cart"));
const Help = React.lazy(() => import("pages/Help"));
const OrderDetails = React.lazy(() => import("pages/OrderDetails"));
const Accountdetails = React.lazy(() => import("pages/Accountdetails"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const TheHazeExperience = React.lazy(() => import("pages/TheHazeExperience"));
const HOME1 = React.lazy(() => import("pages/HOME1"));
const Gifting = React.lazy(() => import("pages/Gifting"));
const Necklaces = React.lazy(() => import("pages/Necklaces"));
const Bracelets = React.lazy(() => import("pages/Bracelets"));
const Pendants = React.lazy(() => import("pages/Pendants"));
const Subscription = React.lazy(() => import("pages/Subscription"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Subscription />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pendants" element={<Pendants />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/home1" element={<HOME1 />} />
          <Route path="/thehazeexperience" element={<TheHazeExperience />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/accountdetails" element={<Accountdetails />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupnext" element={<Signupnext />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
