import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
// import { history } from '../../../services/history';
import {
  loading,
  successAction,
  failureAction,
  // breakAction,
} from '../common/actions';
import {
  requestBrandCarsSucess,
  requestModelsSucess,
  requestVersionsSucess,
  requestCarsSucess,
  requestYearsSucess,
  requestPricesSucess,
} from './actions';
// import { defineInformationUser } from '../contacts/actions';

function* requestBrandCarsSaga() {
  yield put(loading(''));
  try {
    const newOptions = [{ value: 0, label: 'Todas' }];
    const { data } = yield call(api.get, `/Make`);
    data.forEach(element => {
      newOptions.push({
        value: element.ID,
        label: element.Name,
      });
    });
    let cars = [];
    let page = 1;
    let { data: dataCars } = yield call(api.get, `/Vehicles?Page=${page}`);
    cars = [...cars, ...dataCars];
    while (dataCars.length !== 0) {
      page += 1;
      const { data: dataCarsAux } = yield call(
        api.get,
        `/Vehicles?Page=${page}`
      );
      dataCars = dataCarsAux;
      cars = [...cars, ...dataCars];
    }
    const years = cars.map(car => car.YearModel);
    const prices = cars.map(car => car.Price);
    const uniqueYears = [...new Set(years)];
    const uniquePrices = [...new Set(prices)];
    const newYears = [
      {
        label: 'todos',
        value: 0,
      },
    ];
    uniqueYears.forEach((year, index) => {
      newYears.push({
        label: year,
        value: index + 1,
      });
    });
    const newPrices = [
      {
        label: 'todos',
        value: 0,
      },
    ];
    uniquePrices.forEach((price, index) => {
      newPrices.push({
        label: price,
        value: index + 1,
      });
    });

    yield put(requestYearsSucess(newYears));
    yield put(requestPricesSucess(newPrices));
    yield put(requestCarsSucess(cars));
    yield put(requestBrandCarsSucess(newOptions));

    yield put(successAction(''));
  } catch (error) {
    const message = 'Erro ao buscar';
    toast.error(message);
    yield put(failureAction(message));
  }
}

function* requestModels({ payload: { mark } }) {
  yield put(loading(''));

  const { value } = mark;
  const options = [{ value: 0, label: 'Todas' }];
  try {
    if (value !== 0) {
      const { data } = yield call(api.get, `/Model?MakeID=${value}`);
      data.forEach(element => {
        options.push({
          value: element.ID,
          label: element.Name,
        });
      });
    }

    yield put(requestModelsSucess(options));
    yield put(successAction(''));
  } catch (error) {
    const message = 'Error ao filtrar';
    toast.error(message);
    yield put(failureAction(message));
  }
}
function* requestVersions({ payload: { model } }) {
  yield put(loading(''));
  const { value } = model;
  const options = [{ value: 0, label: 'Todas' }];
  try {
    if (value !== 0) {
      const { data } = yield call(api.get, `/Version?ModelID=${value}`);
      data.forEach(element => {
        options.push({
          value: element.ID,
          label: element.Name,
        });
      });
    }
    yield put(requestVersionsSucess(options));
    yield put(successAction(''));
  } catch (error) {
    const message = 'Error ao buscar as versões';
    toast.error(message);
    yield put(failureAction(message));
  }
}
export default all([
  takeLatest('@cars/REQUEST_BRAND_CARS', requestBrandCarsSaga),
  takeLatest('@cars/REQUEST_MODELS', requestModels),
  takeLatest('@cars/REQUEST_VERSIONS', requestVersions),
]);
