import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

const AppRouter = () => {

	const dispatch = useDispatch()

	const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		
		firebase.auth().onAuthStateChanged( (user) => {

			if( user?.uid ) {
				dispatch( login(user.uid, user.displayName) )
				setIsLoggedIn( true )
			} else {
				setIsLoggedIn(false)
			}

			setChecking(false)

		})
	
	}, [ setChecking, setIsLoggedIn ])

	if ( checking ) {
		return (
			<h1>loading...</h1>
		)
	}

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