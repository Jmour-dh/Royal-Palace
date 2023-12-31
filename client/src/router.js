import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import ErrorPage from "./components/pages/errorpage/ErrorPage";
import { rootLoader } from "./components/loaders/rootLoader";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Accueil = lazy(() => import("./components/pages/accueil/Accueil"));
const Resto = lazy(() => import("./components/pages/resto/Resto"));

const Gallery = lazy(() => import("./components/pages/gallery/Gallery"));
const Localisation = lazy(() =>
  import("./components/pages/localisation/Localisation")
);
const Signin = lazy(() => import("./components/pages/cnx/Signin"));
const Signup = lazy(() => import("./components/pages/cnx/Signup"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const Profile = lazy(() => import("./components/pages/profile/Profile"));
const Reserver = lazy(() => import("./components/pages/reserver/Reserver"));
const Admin = lazy(() => import("./components/pages/admin/Admin"));
const AdminReservations = lazy(() =>
  import("./components/pages/admin/pages/AdminReservations/AdminReservations")
);
const AdminReservationsList = lazy(() =>
  import(
    "./components/pages/admin/pages/AdminReservations/pages/AdminReservationList/AdminReservationList"
  )
);
const AdminUsers = lazy(() => import("./components/pages/admin/pages/AdminUsers/AdminUsers"));
const AdminContacts = lazy(() => import("./components/pages/admin/pages/AdminContacts/AdminContacts"));

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
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/reserver",
        element: (
          <ProtectedRoute>
            <Reserver />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin />,
          </ProtectedRoute>
        ),
        children: [
          {
            path: "reservations",
            element: <AdminReservations />,
            children: [
              {
                path: "list",
                element: <AdminReservationsList />,
              },
            ],
          },
          {
            path: 'users',
            element: <AdminUsers />,
          },
          {
            path: 'contacts',
            element: <AdminContacts />,
          },
        ],
      },
    ],
  },
]);
