import styled from 'styled-components';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import { colors } from '../../styles';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: ${colors.pickerSix};
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  /* border-bottom: 2px solid ${colors.pickerOne}; */
  border-bottom: ${({ props }) =>
    props ? 'transparent' : '2px solid #B42020'};
  width: 200px;
  padding: 10px;

  & + div {
    margin-left: 10px;
  }
  &:hover {
    color: ${colors.pickerOne};
    cursor: pointer;
    span {
      color: ${colors.pickerOne};
    }
  }

`;
export const ContainerSelectTwo = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  /* border-bottom: 2px solid ${colors.pickerOne}; */

  border-bottom: ${({ props }) => (props ? '2px solid #456' : 'transparent')};

  width: 200px;
  padding: 10px;

  &:hover {
    color: ${colors.pickerOne};
    cursor: pointer;
    span {
      color: ${colors.pickerOne};
    }
  }
`;

export const IconCar = styled(FaCarSide)`
  font-size: 40px;
  color: ${colors.pickerOne};
`;

export const IconMotorcycle = styled(FaMotorcycle)`
  font-size: 40px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.span`
  font-size: 16px;
  color: ${colors.darker};
`;

export const TextCar = styled.strong`
  font-size: 26px;
  color: ${colors.pickerOne};
`;

export const TextMotoCicle = styled.strong`
  font-size: 26px;
`;
export const ButtonHeader = styled.button`
  padding: 12px;
  width: 250px;
  justify-content: center;
  align-items: center;
  border: solid 3px ${colors.pickerTwo};
  border-radius: 0px;
  transition: border-bottom 0.2s;
  color: ${colors.pickerTwo};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    color: ${colors.pickerTree};
    border: solid 3px ${colors.pickerTree};
  }
`;
