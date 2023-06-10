import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Shared/Dashboard";
import MySelectedClass from "../Pages/Student/MySelectedClass";
import MyEnrolledClass from "../Pages/Student/MyEnrolledClass";
import PaymentHistory from "../Pages/Student/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Student/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mySelectedClass",
        element: <MySelectedClass />,
      },
      {
        path: "myEnrolledClass",
        element: <MyEnrolledClass />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
