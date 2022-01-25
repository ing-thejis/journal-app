import React from 'react'

const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div className="journal__entry-picture"
				style={{
					backgroundSize: 'cover', 
					backgroundImage: 'url(https://image.shutterstock.com/image-photo/double-exposure-image-engineer-standing-260nw-1183302868.jpg)'}}>								
			</div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo dia</p>
				<p className="journal__entry-content">lorem ddvdsvsvsdvadbvd </p>
			</div>

			<div className="journal__entry-date">
				<span>Martes</span>
				<h4>25/01/22</h4>
			</div>
		</div>
	)
}

export default JournalEntry