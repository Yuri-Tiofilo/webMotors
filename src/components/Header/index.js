import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  DivHeader,
  ContainerSelect,
  IconCar,
  ContainerText,
  Title,
  TextCar,
  ContainerSelectTwo,
  IconMotorcycle,
  TextMotoCicle,
  ButtonHeader,
} from './styles';

export default function Header({ selectFunc }) {
  return (
    <Container>
      <DivHeader>
        <ContainerSelect selectFunc={selectFunc}>
          <IconCar />
          <ContainerText>
            <Title>COMPRAR</Title>
            <TextCar selectFunc={selectFunc}>CARROS</TextCar>
          </ContainerText>
        </ContainerSelect>
        <ContainerSelectTwo selectFunc={selectFunc}>
          <IconMotorcycle />
          <ContainerText>
            <Title>COMPRAR</Title>
            <TextMotoCicle selectFunc={selectFunc}>MOTOS</TextMotoCicle>
          </ContainerText>
        </ContainerSelectTwo>
      </DivHeader>
      <ButtonHeader type="button">Vender meu carro</ButtonHeader>
    </Container>
  );
}
Header.propTypes = {
  selectFunc: PropTypes.bool,
};
Header.defaultProps = {
  selectFunc: true,
};
