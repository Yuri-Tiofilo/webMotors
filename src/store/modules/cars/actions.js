export function requestBrandCars() {
  return {
    type: '@cars/REQUEST_BRAND_CARS',
  };
}
export function requestBrandCarsSucess(brandCars) {
  return {
    type: '@cars/REQUEST_BRAND_CARS_SUCESS',
    payload: {
      brandCars,
    },
  };
}
export function requestModels(mark) {
  return {
    type: '@cars/REQUEST_MODELS',
    payload: {
      mark,
    },
  };
}
export function requestModelsSucess(models) {
  return {
    type: '@cars/REQUEST_MODELS_SUCESS',
    payload: {
      models,
    },
  };
}
export function requestVersions(model) {
  return {
    type: '@cars/REQUEST_VERSIONS',
    payload: {
      model,
    },
  };
}
export function requestVersionsSucess(versions) {
  return {
    type: '@cars/REQUEST_VERSIONS_SUCESS',
    payload: {
      versions,
    },
  };
}
export function requestCarsSucess(cars) {
  return {
    type: '@cars/REQUEST_CARS_SUCESS',
    payload: {
      cars,
    },
  };
}
export function requestYearsSucess(years) {
  return {
    type: '@cars/REQUEST_YEARS_SUCESS',
    payload: {
      years,
    },
  };
}
export function requestPricesSucess(prices) {
  return {
    type: '@cars/REQUEST_PRICES_SUCESS',
    payload: {
      prices,
    },
  };
}
export function celanState() {
  return {
    type: '@cars/CLEAN_STATE',
  };
}
