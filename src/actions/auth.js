import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'

export const startLoginEmailPassword = ( email, password ) => {
	return ( dispatch ) => {

		firebase.auth().signInWithEmailAndPassword( email, password)
			.then( ({user}) => {
				dispatch(
					login( user.id, user.displayName)
				)
			})
			.catch( err => {
				console.log(err)
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
				console.log(err)
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

export const login = ( uid, displayName ) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName
		}
	}
}