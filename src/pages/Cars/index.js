import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { icons, colors } from '../../styles';
import {
  Container,
  ContainerBox,
  AreaHeader,
  AreaCheckBox,
  Text,
  ContainerBoxSelect,
  ContainerInputAndSelect,
  DivSelect,
  AreaInput,
  AreaSelectUnique,
  Box,
} from './styles';

import { ContainerTotal } from '../../components/Containers';
import Logo from '../../components/Logo';
import TextInput from '../../components/InputIcon';
import SelectInput from '../../components/Select';
import FotterCard from '../../components/Footer';
import Header from '../../components/Header';

import * as CarsActions from '../../store/modules/cars/actions';

export default function Cars() {
  const dispatch = useDispatch();
  const { brandCars, models, versions, cars, years, prices } = useSelector(
    state => state.cars
  );
  // const { models } = useSelector(state => state.cars);

  const [infoNew, setInfoNew] = useState(false);
  const [infoUsed, setInfoUsed] = useState(false);
  const [selectFunc, setSelectFunc] = useState(true);
  const [inputCity, setinputCity] = useState('');

  const [optionBrandCars, setOptionBrandCars] = useState(brandCars);
  const [optionModels, setOptionModels] = useState(models);

  const [optionRaio, setOptionRaio] = useState([
    { value: 100, label: '100 km' },
    { value: 200, label: '200 km' },
    { value: 300, label: '300 km' },
  ]);

  const [selectOptionRaio, setSelectOptionValue] = useState({
    value: 100,
    label: '100 km',
  });

  const [selectOptionCarBrand, setSelectOptionCarBrand] = useState({
    value: 0,
    label: 'Todas',
  });

  const [selectOptionModelCars, setSelectOptionModelCars] = useState({
    value: 0,
    label: 'Todas',
  });

  const [selectOptionYear, setSelectOptionYear] = useState({
    value: 0,
    label: 'Ano desejado',
  });

  const [optionYears, setOptionYears] = useState([
    {
      value: 0,
      label: 'Todas',
    },
  ]);

  const [optionPrice, setoptionPrice] = useState([
    {
      value: 0,
      label: 'Todas',
    },
  ]);

  const [selectPrice, setSelectPrice] = useState({
    value: 0,
    label: 'Faixa de preço',
  });

  const [selectOptionVersions, setSelectOptionVersions] = useState({
    value: 0,
    label: 'Todas',
  });
  const [optionVersions, setOptionVersions] = useState(versions);

  useEffect(() => {
    dispatch(CarsActions.requestBrandCars());
  }, [dispatch]);

  useEffect(() => {
    setOptionBrandCars(brandCars);
  }, [brandCars]);

  useEffect(() => {
    setOptionModels(models);
  }, [models]);

  useEffect(() => {
    setOptionYears(years);
  }, [years]);

  useEffect(() => {
    setoptionPrice(prices);
  }, [prices]);

  useEffect(() => {
    setOptionVersions(versions);
  }, [versions]);

  function setOptionMark(option) {
    dispatch(CarsActions.requestModels(option));
    setSelectOptionCarBrand(option);
  }
  function setOptionModel(option) {
    dispatch(CarsActions.requestVersions(option));
    setSelectOptionModelCars(option);
  }

  function cleanState() {
    dispatch(CarsActions);
  }

  return (
    <ContainerTotal>
      <AreaHeader>
        <Logo />
      </AreaHeader>
      <Container>
        <Header selectFunc={selectFunc} />
        <Box>
          <ContainerBox>
            <ContainerBoxSelect>
              <AreaCheckBox active onClick={() => setInfoNew(!infoNew)}>
                {infoNew ? (
                  <icons.IconCheckSquare color={colors.pickerOne} />
                ) : (
                  <icons.IconUncheckSquare />
                )}
                <Text>Novos</Text>
              </AreaCheckBox>
              <AreaCheckBox active onClick={() => setInfoUsed(!infoUsed)}>
                {infoUsed ? (
                  <icons.IconCheckSquare color={colors.pickerOne} />
                ) : (
                  <icons.IconUncheckSquare />
                )}
                <Text>Usados</Text>
              </AreaCheckBox>
            </ContainerBoxSelect>

            <ContainerInputAndSelect>
              <AreaInput>
                <TextInput
                  value={inputCity}
                  functionOnChange={text => {
                    setinputCity(text);
                  }}
                  functionOnClick={() => setinputCity('')}
                />
                <SelectInput
                  value={selectOptionRaio}
                  functionOnChange={text => setSelectOptionValue(text)}
                  options={optionRaio}
                />
              </AreaInput>
              <DivSelect>
                <SelectInput
                  value={selectOptionCarBrand}
                  functionOnChange={text => setOptionMark(text)}
                  options={optionBrandCars}
                />
              </DivSelect>
              <DivSelect>
                <SelectInput
                  value={selectOptionModelCars}
                  functionOnChange={text => setOptionModel(text)}
                  options={optionModels}
                />
              </DivSelect>
            </ContainerInputAndSelect>
            <ContainerInputAndSelect>
              <AreaInput>
                <SelectInput
                  value={selectOptionYear}
                  functionOnChange={text => setSelectOptionYear(text)}
                  options={optionYears}
                />
                <SelectInput
                  value={selectPrice}
                  functionOnChange={text => setSelectPrice(text)}
                  options={optionPrice}
                />
              </AreaInput>
              <AreaSelectUnique>
                <SelectInput
                  value={selectOptionVersions}
                  functionOnChange={text => setSelectOptionVersions(text)}
                  options={optionVersions}
                />
              </AreaSelectUnique>
            </ContainerInputAndSelect>
            <FotterCard
              functionCleanState={() => {
                cleanState();
              }}
            />
          </ContainerBox>
        </Box>
      </Container>
    </ContainerTotal>
  );
}
