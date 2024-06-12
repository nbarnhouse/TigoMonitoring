import { all } from 'redux-saga/effects';
import starSaga from './star.saga';

export default function* rootSaga() {
  yield all([starSaga()]);
}
