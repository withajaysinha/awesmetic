import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainBody from "./components/MainBody/MainBody";
import Navbar from "./components/Navbar/Navbar";
import { appReducer } from "./reducers/appReducer";
import HomePage from "./pages/HomePage/HomePage";
import CatogerySlugValidator from "./components/CatogerySlugValidator/CatogerySlugValidator";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";
import Product from "./pages/ProductPage/Product";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Header from "./components/Header/Header";
// import SubCatogerySlugValidator from "./components/SubCategoryValidator/SubCatogerySlugValidator";

const initalState = {
  rootLevelCatogeryData: [],
};
export const AppContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(initalState, appReducer);
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        <Navbar />
        <MainBody>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route
              path="/:categoryName/:categoryId"
              element={<CatogerySlugValidator />}
            />
            <Route
              path="/:categoryName/:categoryId/:subCategoryName/:subCategoryId"
              element={<SubCategoryPage />}
            />
            <Route
              path="/:categoryName/:categoryId/:subCategoryName/:subCategoryId/:productName/:productId"
              element={<Product />}
            />
            <Route index path="/login-page" element={<LoginPage />} />
            <Route index path="/signup-page" element={<SignUpPage />} />
          </Routes>
        </MainBody>
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
