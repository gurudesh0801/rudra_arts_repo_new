import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import AllProducts from "./Components/AllProducts/AllProducts";
import News from "./Components/News/News";

import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ProductManager from "./Components/Dashboard/ProductsManager";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton"; // Import ScrollToTopButton
import AddProduct from "./Components/Dashboard/AddProduct";
import FullAbout from "./Components/About/FullAbout";
import FullNews from "./Components/News/FullNews";
import ProductDetails from "./Components/Products/ProductDetails";
import AddNews from "./Components/Dashboard/AddNews";
import AddBlogs from "./Components/Dashboard/AddBlogs";
import BlogChecker from "./Components/Dashboard/BlogChecker";

const App = () => {
  useEffect(() => {
    const token = Cookies.get();
    console.log(token);
  }, []);

  // Add this new effect to disable right-click
  const disableRightClick = (e) => {
    e.preventDefault();
  };

  document.addEventListener("contextmenu", disableRightClick);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Element name="home">
                <Home />
              </Element>
              <Element name="about">
                <AboutUs />
              </Element>
              <Element name="Products">
                <Products />
              </Element>
              <Element name="news">
                <News />
              </Element>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <FullAbout />
            </Layout>
          }
        />
        <Route
          path="/Blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <FullNews />
            </Layout>
          }
        />
        <Route
          path="/Products"
          element={
            <Layout>
              <AllProducts />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/product-details/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute>
              <ProductManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-products"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/news"
          element={
            <PrivateRoute>
              <AddNews />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/blog"
          element={
            <PrivateRoute>
              <AddBlogs />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/blog-checker"
          element={
            <PrivateRoute>
              <BlogChecker />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* Add the ScrollToTopButton below all routes */}
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
