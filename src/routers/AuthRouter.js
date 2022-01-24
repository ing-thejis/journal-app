import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';

const AuthRouter = () => {
	return (
		<Routes>
			<Route path="/auth/login" element={ <LoginScreen /> } />
			<Route path="/auth/register" element={ <RegisterScreen /> } />

			<Route path="*" element={ <Navigate to="/auth/login" /> } />
		</Routes> 
	)
}

export default AuthRouter