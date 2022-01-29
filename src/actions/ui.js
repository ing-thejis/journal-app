import { types } from '../types/types';

export const setError = (err) => ({
	type: types.uiSetError,
	payload: err
});

export const delError = () => ({
	type: types.uiDelError
})

export const startLoading = () => {
	return {
		type: types.uiStartLoaing
	}
}

export const finishLoading = () => {
	return {
		type: types.uiFinishLoading
	}
}