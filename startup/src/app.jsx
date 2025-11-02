import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

//TODO: Remove login and signup navlinks when logged in

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <PageMeta/>
            <Header authState={authState}/>

            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={
                    <Login
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />}
                />
                <Route path='/signup' element={
                    <Signup
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />}
                />
                <Route path='/budget-center' element={
                    <BudgetCenter
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />}
                />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}