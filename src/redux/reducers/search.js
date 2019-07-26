import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE, SEARCH_MOVIE_BY_ID_START, SEARCH_MOVIE_BY_ID_COMPLETE, SEARCH_MOVIE_BY_ID_ERROR } from '../../consts/actionTypes';
import { get } from 'lodash';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true, movies: null };
      break;
    case SEARCH_MOVIE_COMPLETE:
      return { ...state, isLoading: false, movieResults: get(action, 'results.data') };
      break;
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movies: null };
      break;
    case SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };
      break;
    case SEARCH_MOVIE_BY_ID_COMPLETE:
      return { ...state, isLoading: false, movieResult: get(action, 'movie.data') };
      break;
    case SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
      break;
    default:
      return { ...state };
  }
}
