import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import { useEffect } from "react";

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/dashboard")
        }
    }, [])

    console.log(pathname)

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App;