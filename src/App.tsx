import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainContent from "./MainContent";
import AboutUsPage from "./page/AboutUsPage";
import CataloguePage from "./page/CataloguePage";
import ContactPage from "./page/ContactPage";
import ErrorPage from "./page/ErrorPage";
import HomePage from "./page/HomePage";
import ProductDetailPage from "./page/ProductDetailPage";
import Footer from "./components/footer/Footer";
import MainContainer from "./components/MainContainer";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainContent />}>
          <Route path="" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="catalogue" element={<CataloguePage />}>
            <Route path="" element={<ErrorPage />} />
          </Route>
          <Route path="/catalogue/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <MainContainer>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
