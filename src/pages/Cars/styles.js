import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 933px;
  height: 100%;
  max-height: 312px;
  margin: 0px auto;
  background: #fff;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  /* background: #678; */
  align-items: center;
  padding: 20px;
  /* padding-left: 100px; */
  /* justify-content: center; */
`;
export const AreaHeader = styled.header`
  width: 100%;
  max-width: 933px;
  height: 50%;
  max-height: 312px;
  margin: 0 auto;
  display: flex;
`;

export const AreaCheckBox = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: flex-start;
  align-items: center;
  width: 85px;
  height: 30px;
  color: ${colors.regular};
  :hover {
    cursor: ${active => (active ? 'pointer' : 'normal')};
  }
  svg {
    transition: background-color 0.7s;
    color: ${colors.regular};
    padding: 1px;
    border-radius: 8px;
    :hover {
      background-color: ${colors.darknesTransparent};
    }
    :active {
      background-color: ${colors.whiteTransparent};
    }
  }
`;
export const Text = styled.p`
  color: ${colors.regular};
  font-size: 18px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContainerBoxSelect = styled.div`
  display: flex;

  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;
export const ContainerInputAndSelect = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-top: 10px;

  & + div {
    margin-left: 10px;
  }
`;
export const AreaInput = styled.div`
  display: flex;
  margin-right: 10px;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
`;

export const AreaSelectUnique = styled.div`
  display: flex;
  width: 102%;
  flex-direction: row;

  margin-top: 10px;
`;
