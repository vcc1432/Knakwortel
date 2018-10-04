// src/reducers/filters.js
import { FILTER_SAUCE, FILTER_VEGETABLE } from '../actions/filters'

const initialState = {
  sauceFilter: false,
  vegetableFilter: false
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      // Only sauce
      case FILTER_SAUCE:
        if (state.sauceFilter === false) return {...state, sauceFilter: true}
        return {...state, sauceFilter: false}
      // Only vegetables
      case FILTER_VEGETABLE:
        if (state.vegetableFilter === false) return {...state, vegetableFilter: true}
        return {...state, vegetableFilter: false}
    default: 
      return state
    }
  }