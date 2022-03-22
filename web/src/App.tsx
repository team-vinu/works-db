import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Store
import { store } from './app/store'

// Pages and theme
import { Home, Person } from './views/pages';
import theme from './styles/theme';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/person" element={<Person />} />

                {/* for debug */}
                <Route path="/preview" element={<Person />} /> 
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                    <App />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
