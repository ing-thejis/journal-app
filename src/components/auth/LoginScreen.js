import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth'

const LoginScreen = () => {

	const dispatch = useDispatch();

	const [ values, handleInputChange ] = useForm({
		email: 'test@test.com',
		password: 'admin123'
	})

	const { email, password } = values;

	const handleLogin = (e) => {
		e.preventDefault();
		
		dispatch( login(1234, 'name test') )
	}

	return (
		<>
			<h3 className="auth__title mb-5">Login</h3>

			<form onSubmit={handleLogin} >
				<input 
					className="auth__input" 
					type="text" 
					placeholder="Email" 
					name="email" 
					autoComplete="off" 
					value={ email }
					onChange={ handleInputChange }/>

				<input 
					className="auth__input" 
					type="password" 
					placeholder="Password" 
					name="password"
					value={ password }
					onChange={ handleInputChange }/>
				
				<button className="btn btn-primary btn-block" type="submit">
					Login
				</button>

				<div className="auth__social-network">
					<p className="mb-5">Login with Social Networks</p>
					<div className="google-btn">
					    <div className="google-icon-wrapper">
					        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
					    </div>
					    <p className="btn-text">
					        <b>Sign in with google</b>
					    </p>
					</div>

					<Link className="link mt-5" to="/auth/register">
						Create New Account
					</Link>
				</div>
			</form>
		</>
	)
}

export default LoginScreen