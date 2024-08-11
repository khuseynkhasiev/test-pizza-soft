import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../components/pages/mainPage/mainPage";
import { AddEmployessPage } from "../components/pages/addEmployessPage/addEmployessPage";
import { EditEmployeesPage } from "../components/pages/editEmployeesPage/editEmployeesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/add",
        element: <AddEmployessPage />,
    },
    {
        path: "/edit/:id",
        element: <EditEmployeesPage />,
    },
]);
