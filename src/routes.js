import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import Edit from "./views/Edit";
import User from "./layouts/User/User";
import UserDashboard from './views/User/components/UserDashboard'
import { useSelector } from "react-redux";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Addbehavior from "./views/User/AddBehavior/Addbehavior";

export default function Router() {
    const isAuthenticated = useSelector((state)=>state.user.isAuthenticated)
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'auth',
        element: <AuthLayout />, 
        children : [
        ]
    },
    { path: '/login', element: <Login />},
    { path: '/register' , element: <SignUp /> },
    { path: '/edit/:id' , element: <Edit /> },
    {
        element: <ProtectedRoutes isLogged={isAuthenticated} />,
        children:[
            {path:'user', element: <User />,
            children:[
                {path:'dashboard', element: <UserDashboard /> }
            ]
            },
        ]
    },
   
       {
        path:'/admin-login',
        element: <AdminLogin /> 
       },
       {
        path:'add-behavior',
        element: <Addbehavior /> 
       },
       {
        path:'*',
        element: <ErrorPage /> 
       }
    ])
    return element
}