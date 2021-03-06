import React, { useReducer, useEffect } from 'react'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'
import { HIDE_ALERT, SHOW_ALERT, CLEAR_ALERT } from '../types'

export const AlertState = ({ children }) => {
	const [state, dispatch] = useReducer(alertReducer, { visible: false })

	useEffect(() => {
		if (state.text) {
			setTimeout(() => {
				dispatch({
					type: CLEAR_ALERT
				})
			}, 3700)
		}
	}, [state])

	const show = (text, type = 'warning') => {
		dispatch({
			type: SHOW_ALERT,
			payload: { text, type }
		})
	}

	const hide = () => dispatch({ type: HIDE_ALERT })

	return (
		<AlertContext.Provider value={{
			show, hide,
			alert: state
		}}>
			{children}
		</AlertContext.Provider>
	)
}