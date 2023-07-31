import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodayPage from "./pages/today";
import OverviewPage from "./pages/overview";
import MainLayout from "./layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index path="" element={<OverviewPage />} />
                    <Route index path="/today" element={<TodayPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;