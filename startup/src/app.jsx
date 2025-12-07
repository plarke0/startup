import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AuthState } from './auth/authState';
import PageMeta from './app-components/pageMeta';
import Header from './app-components/header';
import Footer from './app-components/footer';
import About from './about/about';
import Home from './home/home';
import BudgetCenter from './budget-center/budget-center';
import Login from './login/login';
import Signup from './signup/signup';
import NotFound from './app-components/notFound';

function AppFrame({ authState }) {
    return (
        <>
            <PageMeta />
            <Header authState={authState} />
            <Outlet />
            <Footer />
        </>
    );
}

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const handleAuthChange = (userNameArg, authStateArg) => {
        setAuthState(authStateArg);
        setUserName(userNameArg);
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppFrame authState={authState} />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Home /> },
                { path: 'about', element: <About /> },
                {   
                    path: 'login',
                    element: (
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={handleAuthChange}
                        />
                    ),
                },
                {
                    path: 'signup',
                    element: (
                        <Signup
                            userName={userName}
                            authState={authState}
                            onAuthChange={handleAuthChange}
                        />
                    ),
                },
                {
                    path: 'budget-center',
                    element: (
                        <BudgetCenter
                            userName={userName}
                            authState={authState}
                            onAuthChange={handleAuthChange}
                        />
                    ),
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />
};
