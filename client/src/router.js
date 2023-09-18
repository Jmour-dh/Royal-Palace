import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import ErrorPage from "./components/pages/errorpage/ErrorPage";
import { rootLoader } from "./components/loaders/rootLoader";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Accueil = lazy(() => import("./components/pages/accueil/Accueil"));
const Resto = lazy(() => import("./components/pages/resto/Resto"));

const Gallery = lazy(() => import("./components/pages/gallery/Gallery"));
const Localisation = lazy(() =>
  import("./components/pages/localisation/Localisation")
);
const Signin = lazy(() => import("./components/pages/cnx/Signin"));
const Signup = lazy(() => import("./components/pages/cnx/Signup"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));

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
      {
        path: "/resto",
        element: <Resto />,
      },

      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/localisation",
        element: <Localisation />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
