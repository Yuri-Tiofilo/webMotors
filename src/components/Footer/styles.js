import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../styles';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const ButtonOfert = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: ${colors.pickerOne};
  transition: color 0.2s;
  &:hover {
    color: ${darken(0.1, `${colors.pickerOne}`)};
  }
`;

export const ButtonClean = styled.button`
  border: 0;
  background: none;
  font-weight: 500;
  color: ${colors.regular};
  margin-right: 25px;
  transition: color 0.2s;
  &:hover {
    color: ${darken(0.1, `${colors.regular}`)};
  }
`;

export const Button = styled.button`
  border: 0;
  background: ${colors.pickerOne};
  color: ${colors.white};
  width: 300px;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.2s;
  &:hover {
    background: ${darken(0.1, `${colors.pickerOne}`)};
  }
`;
