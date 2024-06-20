import { all } from 'redux-saga/effects';
import tigoSaga from './tigo.saga';

export default function* rootSaga() {
  yield all([tigoSaga()]);
}
