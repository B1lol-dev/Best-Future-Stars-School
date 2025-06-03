import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import { Suspense } from "./utils/suspense";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default App;
