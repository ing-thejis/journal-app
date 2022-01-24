import React from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import AuthRouter from './AuthRouter';
import JournalApp from '../JournalApp';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/auth" element={ <AuthRouter /> } />
				<Route path="/" element={ <JournalApp /> } />

				<Route path="*" element={ <Navigate to="/auth/login" /> } />
			</Routes>
		</Router>
	)
}

export default AppRouter