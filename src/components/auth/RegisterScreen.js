import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
	return (
		<>
			<h3 className="auth__title mb-5">Register</h3>

			<form>
				<input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" />
				<input className="auth__input" type="password" placeholder="Password" name="password" />
				<input className="auth__input" type="confirm" placeholder="Confirm Password" name="confirm" />
				<button className="btn btn-primary btn-block mb-5" type="submit">
					Register
				</button>
				<Link className="link mt-5" to="/auth/register">
					Already regitered?
				</Link>

			</form>
		</>
	)
}

export default RegisterScreen