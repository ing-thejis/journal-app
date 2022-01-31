import Swal from 'sweetalert2';

import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { startLoading, finishLoading } from './ui'

export const startLoginEmailPassword = ( email, password ) => {
	return ( dispatch ) => {

		dispatch(startLoading())

		return firebase.auth().signInWithEmailAndPassword( email, password)
			.then( ({user}) => {
				dispatch(login( user.id, user.displayName))
				dispatch(finishLoading())
			})
			.catch( err => {
				dispatch(finishLoading())
				console.log(err)
				Swal.fire('Error', err.message, 'error')
			})
	}
}

export const startRegisterWithFormValues = (email, password, name) => {
	return (dispatch) => {

		firebase.auth().createUserWithEmailAndPassword( email, password )
			.then( async ({user}) => {
				await user.updateProfile({displayName: name})
				dispatch(
					login( user.id, user.displayName )
				)
			})
			.catch( err => {
				console.log('error', err)
				Swal.fire('Error', err.message, 'error')	
			})
	}
}

export const startGoogleLogin = () => {
	return (dispatch) => {

		firebase.auth().signInWithPopup( googleAuthProvider )
			.then(({ user }) => {
				dispatch(
					login( user.id, user.displayName)
				)
			})
	}
}

export const login = ( uid, displayName ) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
})


export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch( logout() )
	}
}

export const logout = () => ({
	type: types.logout
})