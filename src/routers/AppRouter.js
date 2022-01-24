import React from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';

const AppRouter = () => {
	return (
		<Router>
		<div>
			<Routes>
				<Route path="/auth/*" element={ <AuthRouter /> } />
				<Route path="/" element={ <JournalScreen /> } />

				<Route path="*" element={ <Navigate to="/auth/login" /> } />
			</Routes>
		</div>
		</Router>
	)
}

export default AppRouter