import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getTigoData(action) {
  try {
    console.log('Action Payload', action.payload);

    const response = yield axios.get('/api/tigo/inverters/list');

    yield put({ type: 'GET_TIGO_DATA', payload: response.data });
  } catch (error) {
    console.log('TIGO API Data Failed', error);
  }
}

function* tigoSaga() {
  yield takeLatest('FETCH_TIGO_DATA', getTigoData);
}

export default tigoSaga;
