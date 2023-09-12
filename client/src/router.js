import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import ErrorPage from "./components/pages/errorpage/ErrorPage";
import { rootLoader } from "./components/loaders/rootLoader";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Accueil = lazy(() => import("./components/pages/accueil/Accueil"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [ 
      {
        index: true,
        element: <Accueil />,
      },
    ]
  }
]);