import produce from 'immer';

const INITIAL_STATE = {
  brandCars: [{ value: 0, label: 'Todas' }],
  models: [{ value: 0, label: 'Todas' }],
  versions: [{ value: 0, label: 'Todas' }],
  cars: [{ value: 0, label: 'Todas' }],
  years: [{ value: 0, label: 'Ano desejado' }],
  prices: [{ value: 0, label: 'Faixa de preço' }],
};

export default function car(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cars/REQUEST_BRAND_CARS_SUCESS':
      return produce(state, draft => {
        draft.brandCars = action.payload.brandCars;
      });
    case '@cars/REQUEST_MODELS_SUCESS':
      return produce(state, draft => {
        draft.models = action.payload.models;
      });
    case '@cars/REQUEST_VERSIONS_SUCESS':
      return produce(state, draft => {
        draft.versions = action.payload.versions;
      });
    case '@cars/REQUEST_CARS_SUCESS':
      return produce(state, draft => {
        draft.cars = action.payload.cars;
      });
    case '@cars/REQUEST_YEARS_SUCESS':
      return produce(state, draft => {
        draft.years = action.payload.years;
      });
    case '@cars/REQUEST_PRICES_SUCESS':
      return produce(state, draft => {
        draft.prices = action.payload.prices;
      });
    case '@cars/CLEAN_STATE':
      return produce(state, draft => {
        draft.brandCars = [{ value: 0, label: 'Todas' }];
        draft.models = [{ value: 0, label: 'Todas' }];
        draft.versions = [{ value: 0, label: 'Todas' }];
        draft.cars = [{ value: 0, label: 'Todas' }];
        draft.years = [{ value: 0, label: 'Ano desejado' }];
        draft.prices = [{ value: 0, label: 'Faixa de preço' }];
      });
    default:
      return state;
  }
}
