import React from 'react'
import JournalEntries from './JournalEntries';
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

const Sidebar = () => {

	const dispatch = useDispatch();

		const handleLogout = () => {
			dispatch( startLogout() )
		}

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3>
					<i className="far fa-moon"></i>
					<span>Jesith</span>
				</h3>
				<button className="btn" onClick={ handleLogout }>
					Logout
				</button>
			</div>
			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				New Entry
			</div>

			<JournalEntries />
			
		</aside>
	)
}

export default Sidebar