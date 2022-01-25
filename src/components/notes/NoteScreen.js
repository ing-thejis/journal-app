import React from 'react'
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			
			<NotesAppBar />

			<div className="notes__content">

				<input type="text" placeholder="Some awesome" className="notes__title-input"/>
				<textarea placeholder="what happend today??" className="notes__textarea"></textarea>				
			
				<div className="notes__image">
					<img src="https://nodenet.es/sites/default/files/2021-05/desarrollo-web.png" alt="image"/>
				</div>
			</div>

		</div>
	)
}

export default NoteScreen