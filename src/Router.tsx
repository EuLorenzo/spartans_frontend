import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Main } from "./pages/Main/Main";
import { Shopping } from "./pages/Shopping/Shopping";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Main />} />
                <Route path="/shopping" element={<Shopping />} />
            </Route>
        </Routes>
    )
}