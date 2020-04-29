import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${colors.regular};
  & + div {
    margin-left: 10px;
  }
`;
