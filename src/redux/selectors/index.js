import { get } from 'lodash';

export const isSearchingLoading = state => get(state, 'search.isLoading');
export const movieResults = state => get(state, 'search.movieResults.Search');
export const movieResult = state => get(state, 'search.movieResult');
