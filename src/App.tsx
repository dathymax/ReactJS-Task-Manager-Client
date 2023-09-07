import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./layout";
import DashboardPage from "./pages/dashboard";
import { useEffect } from "react";
import AnalyticsPage from "./pages/analytics";
import TaskListPage from "./pages/task-list";
import InboxPage from "./pages/inbox";

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/dashboard")
        }
    }, [])

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/dashboard" element={<DashboardPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/task-list" element={<TaskListPage />} />
                <Route path="/inbox" element={<InboxPage />} />
            </Route>
        </Routes>
    )
}

export default App;