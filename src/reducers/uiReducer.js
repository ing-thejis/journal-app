import { types } from '../types/types';

const initState = {
	loading: false,
	msgError: null
}

export const uiReducer = (state = initState, action) => {
	
	
	switch (action.types) {
		case types.uiSetError:
			return {
				...state,
				msgError: action.payload 
			}

		case types.uiDelError:
			return {
				...state,
				msgError: null
			}
	
		default:
			return state;
	}
	
	
}