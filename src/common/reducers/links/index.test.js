import {links as reducer, initialState} from 'reducers/links'
import {
	GET_LINKS_SUCCESS,
	GET_LINKS_FAIL,
	GET_LINKS_PENDING
} from 'actions/links'

describe('LINKS REDUCER', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {x: 'string'})).toEqual(initialState)
	})

	it('should handle GET_LINKS_SUCCESS', () => {
		const payload = [{item: 'payload'}]

		const success = {
			type: GET_LINKS_SUCCESS,
			payload
		}
		expect(reducer(initialState, success)).toEqual({
			...initialState,
			count: 1,
			entities: payload,
			isLoaded: true,
			isLoading: false
		})
	})

	it('should handle GET_LINKS_FAIL', () => {
		const fail = {
			type: GET_LINKS_FAIL,
			payload: {
				errors: {
					hmm: 'thatsanerror'
				}
			}
		}
		expect(reducer(initialState, fail)).toEqual({
			...initialState,
			count: 0,
			errors: {
				hmm: 'thatsanerror'
			},
			isLoaded: true,
			isLoading: false
		})
	})

	it('should handle GET_LINKS_PENDING', () => {
		const pending = {
			type: GET_LINKS_PENDING
		}
		expect(reducer(initialState, pending)).toEqual({
			...initialState,
			errors: {},
			isLoaded: false,
			isLoading: true
		})
	})
})
