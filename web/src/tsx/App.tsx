import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Creator from "./views/Creator";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/preview" element={<Home />} /> {/* for debug */}
                <Route path="/" element={<Home />} />
                <Route path="/creator" element={<Creator />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);