import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/pages/Home';
import Person from './views/pages/Person';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/person" element={<Person />} />

                {/* for debug */}
                <Route path="/preview" element={<Person />} /> 
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
