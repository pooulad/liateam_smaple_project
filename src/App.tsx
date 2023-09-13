import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import { PageHeader } from "./components/PageHeader/index";
import useCategoryRequests from "./hooks/useCategoriesRequests";
import { PageFooter } from "./components/PageFooter";
import { CartProvider } from "./context/CartContext";
const Intro = React.lazy(() => import("./components/Loader/Intro"));
const Loader = React.lazy(() => import("./components/Loader/Loader"));
const Category = React.lazy(() => import("./components/Category/Category"));
const Home = React.lazy(() => import("./components/Home/Home"));

function App() {
  const { categories, categoriesLoading } = useCategoryRequests();
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<Intro />}>
          {categoriesLoading ? (
            <Loader />
          ) : (
            <>
              <PageHeader categories={categories} />
              <Routes>
                <Route path="/" element={<Home categories={categories} />} />
                <Route path="/category/:id" element={<Category />} />
              </Routes>
              <PageFooter />
            </>
          )}
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;
