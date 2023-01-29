import React from "react";
import {HashRouter, Routes, Route, Outlet} from "react-router-dom";
import MainContent from "./MainContent";
import AboutUsPage from "./page/AboutUsPage";
import ContactPage from "./page/ContactPage";
import ErrorPage from "./page/ErrorPage";
import HomePage from "./page/HomePage";
import ProductDetailPage from "./page/ProductDetailPage";


function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<MainContent />}>
          <Route path="" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="catalogue" element={<Outlet />}>
            <Route path="" element={<ErrorPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
