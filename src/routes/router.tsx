import { BrowserRouter, Routes, Route } from 'react-router';
import { ROUTES } from './route';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={
                    <HomePage />
                } />
                <Route path={ROUTES.LOGIN} element={
                    <LoginPage />
                } />
            </Routes>
        </BrowserRouter>
    );
}