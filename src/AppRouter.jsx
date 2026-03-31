import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import Counter from "./state-demo/counter";
import PromiseDemo from "./use-effect-demo/promise-demo";
import ProductList from "./use-effect-demo/product-list";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/promise-demo" element={<PromiseDemo />} />
                <Route path="/product-list" element={<ProductList />} />
            </Routes>
        </BrowserRouter>
    )
}