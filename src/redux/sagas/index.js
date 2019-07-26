import { all } from 'redux-saga/effects';

import search from './search';

export default function* rootSaga() {
	yield all([ search() ]);
}
