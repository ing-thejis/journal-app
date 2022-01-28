import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'

import { useForm } from '../../hooks/useForm';
import { setError, delError } from '../../actions/ui'
import { startRegisterWithFormValues } from '../../actions/auth'

const RegisterScreen = () => {

	const dispatch = useDispatch();
	const { msgError } = useSelector( state => state.ui )

	const [ values, handleInputChange ] = useForm({
		name: 'Jesith',
		email: 'jesith@test.com',
		password: '123456',
		password2: '123456'
	})

	const { name, email, password, password2 } = values;

	const handleRegister = (e) => {
		e.preventDefault();

		if( isFormValid() ) {
			dispatch(startRegisterWithFormValues(email,password,name))
		}
	}

	const isFormValid = () => {

		if( name.trim().length === 0) {
			console.log('Name is required')
			dispatch( setError('Name is required') )
			return false;
		} else if ( !validator.isEmail( email )) {
			console.log('Email isn\'t valid')
			dispatch( setError('Email isn\'t valid') )
			return false
		} else if ( password !== password2 || password.length < 5 ) {
			console.log('Password is invalid')
			dispatch( setError('Password is invalid') )
			return false
		}

		dispatch( delError() )
		return true

	}

	return (
		<>
			<h3 className="auth__title mb-5">Register</h3>

			 <form onSubmit={handleRegister}>

			 	{ msgError && <div className="auth__alert-error">{ msgError }</div> 	}

				<input 
					className="auth__input"
					type="text"
					placeholder="Name"
					name="name"
					autoComplete="off"
					value={name}
					onChange={ handleInputChange }
				/>

				<input 
					className="auth__input" 
					type="text" 
					placeholder="Email" 
					name="email" 
					autoComplete="off" 
					value={email} 
					onChange={ handleInputChange }
				/>
				
				<input 
					className="auth__input" 
					type="password" 
					placeholder="Password" 
					name="password" 
					value={password} 
					onChange={ handleInputChange }
				/>
				
				<input 
					className="auth__input" 
					type="password" 
					placeholder="Confirm Password" 
					name="password2" 
					value={password2} 
					onChange={ handleInputChange }
				/>
				
				<button className="btn btn-primary btn-block mb-5" type="submit">
					Register
				</button>
				<Link className="link mt-5" to="/auth/login">
					Already regitered?
				</Link>

			</form>
		</>
	)
}

export default RegisterScreen