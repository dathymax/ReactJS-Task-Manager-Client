import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<>Hello world</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;