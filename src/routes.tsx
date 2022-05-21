import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './Common/styles/App.less';

import Layout from './Common/containers/Layout';
import SignIn from './Screens/Auth/SignIn';
import SignUp from './Screens/Auth/SignUp';
import ForgotPassword from './Screens/Auth/ForgotPassword';
import Dashboard from './Screens/Dashboard/Dashboard';

const MainRoutes: FunctionComponent = () => {
	
	return (
        <Router>
            <Routes>
                {/* Non authentication routes */}
                <Route path='*' element={<SignIn />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/sign-up' element={<SignUp />} />
                {/* Authenticated routes */}
            </Routes>
            <Layout>
                <Routes>
                    <Route path='/home' element={<Dashboard />} />
                </Routes>
            </Layout>
        </Router>        
	);
};

export default MainRoutes;