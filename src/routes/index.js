import { 
  Suspense, 
  lazy 
} from "react"
import { 
  Navigate, 
  useRoutes 
} from "react-router-dom"

import Public from "layouts/public"

import LoadingScreen from "components/LoadingScreen"

import {
  ProtectedRoute 
} from "./ProtectedRoute"

const Loadable = (Component, isProtected=false) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      {
        isProtected 
        ? <ProtectedRoute>
          <Component {...props} />
        </ProtectedRoute>
        : <Component {...props} />
      }
    </Suspense>
  )
}

export default function Router() {

  return useRoutes([
    {
      path: "/",
      element: <Public />,
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        { path: "home", element:  <HomePage /> },
        { path: "sign-in", element:  <SignInPage /> },
        { path: "sign-up", element:  <SignUpPage /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ])
}

const HomePage = Loadable(lazy(() => import("scenes/public/Home")), true)
const SignInPage = Loadable(lazy(() => import("scenes/public/SignIn")), false)
const SignUpPage = Loadable(lazy(() => import("scenes/public/SignUp")), false)
const Page404 = Loadable(lazy(() => import("scenes/Page404")))
