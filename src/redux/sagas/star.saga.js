import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAPODdata(action) {
  try {
    console.log('Action Payload', action.payload);

    const response = yield axios.get('/api/apod');

    yield put({ type: 'GET_APOD_DATA', payload: response.data });
  } catch (error) {
    console.log('NASA APOD Data Failed', error);
  }
}

function* starSaga() {
  yield takeLatest('FETCH_APOD_DATA', getAPODdata);
}

export default starSaga;
