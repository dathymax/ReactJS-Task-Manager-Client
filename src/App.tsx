import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskListPage from "./pages/task-list";
import OverviewPage from "./pages/overview";
import MainLayout from "./layout";
import CalendarPage from "./pages/calendar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index path="/" element={<OverviewPage />} />
                    <Route path="/overview" element={<OverviewPage />} />
                    <Route path="/task-list" element={<TaskListPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;