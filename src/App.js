import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import "./App.min.css";
import PublicRoute from "./routes/publicRoutes";
import PrivateRoute from "./routes/privateRoutes";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const About1 = lazy(() => import("./views/product/About1"));
const Service1 = lazy(() => import("./views/product/Service1"));
const Publication1 = lazy(() => import("./views/product/Publication1"));
const License1 = lazy(() => import("./views/product/License1"));
const Contact1 = lazy(() => import("./views/product/Contact1"));

const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice")); 
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));

function App() {
  return (
    <BrowserRouter basename="">
      <Suspense
        fallback={
          <div className="text-white text-center mt-3">Loading...</div>
        }
      >
        <React.Fragment>
          <TopMenu />
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route exact path="/account/signin" element={<PublicRoute><SignInView /></PublicRoute>} />
            <Route exact path="/account/signup" element={<PublicRoute><SignUpView /></PublicRoute>} />
            <Route
              exact
              path="/account/forgotpassword"
              element={<ForgotPasswordView />}
            />
            <Route exact path="/account/profile" element={<PrivateRoute><MyProfileView /></PrivateRoute>} />
            <Route exact path="/account/orders" element={<OrdersView />} />
            <Route exact path="/account/wishlist" element={<WishlistView />} />
            <Route
              exact
              path="/account/notification"
              element={<NotificationView />}
            />
            <Route exact path="/category" element={<ProductListView />} />
            <Route exact path="/about" element={<About1 />} />
            <Route exact path="/services" element={<Service1 />} />
            <Route exact path="/publication" element={<Publication1 />} />
            <Route exact path="/license" element={<License1 />} />
            <Route exact path="/contact" element={<Contact1 />} />
            <Route exact path="/product/detail" element={<ProductDetailView />} />
            <Route exact path="/star/zone" element={<StarZoneView />} />
            <Route exact path="/cart" element={<CartView />} />
            <Route exact path="/checkout" element={<CheckoutView />} />
            <Route exact path="/invoice" element={<InvoiceView />} /> 
            <Route exact path="/contact-us" element={<ContactUsView />} />
            <Route exact path="/support" element={<SupportView />} />   
            <Route exact path="/500" element={<InternalServerErrorView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
