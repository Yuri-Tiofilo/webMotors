import styled from 'styled-components';
import { FaBackspace, FaMapMarkerAlt } from 'react-icons/fa';

import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border: 1px solid ${colors.regular};
  width: 350px;
  align-items: center;
`;

export const Input = styled.input`
  width: 150px;
  border: 0;
  padding: 0 10px;
  background: transparent;
  color: ${colors.black};
  font-weight: bold;

  ::placeholder {
    font-weight: bold;
    color: ${colors.black};
  }
`;

export const IconLocalization = styled(FaMapMarkerAlt)`
  margin-left: 15px;
  font-size: 20px;
  color: ${colors.pickerOne};
`;

export const IconClose = styled(FaBackspace)`
  margin-right: 15px;
  font-size: 20px;
  color: ${colors.regular};
`;

export const TextInput = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: ${colors.darker};
`;
