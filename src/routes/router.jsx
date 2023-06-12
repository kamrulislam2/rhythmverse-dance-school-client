import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Shared/Dashboard";
import MySelectedClass from "../Pages/StudentDashboard/MySelectedClass";
import MyEnrolledClass from "../Pages/StudentDashboard/MyEnrolledClass";
import PaymentHistory from "../Pages/StudentDashboard/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/StudentDashboard/Payment";
import AddClass from "../Pages/InstructorDashboard/AddClass";
import MyClasses from "../Pages/InstructorDashboard/MyClasses";
import UpdateMyClasses from "../components/MyClassesCard/UpdateMyClasses";
import ManageClasses from "../Pages/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";

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
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "myClasses",
        element: <MyClasses />,
      },
      {
        path: "updateClass/:id",
        element: <UpdateMyClasses />,
      },
      {
        path: "manageClasses",
        element: <ManageClasses />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
