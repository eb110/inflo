import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { HomePage } from "../../features/home/HomePage";
import { Users } from "../../features/userManagement/Users";
import { UserDetails } from "../../features/userManagement/UserDetails";
import { AboutPage } from "../../features/about/AboutPage";
import { LogsPage } from "../../features/logs/LogsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element:<HomePage />},
            {path: 'users', element:<Users />},
            {path: 'users/:id', element:<UserDetails />},
            {path: 'about', element:<AboutPage />},
            {path: 'logs', element:<LogsPage />},
        ]
    }
])