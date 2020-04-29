import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Input,
  IconLocalization,
  IconClose,
  TextInput,
} from './styles';

export default function InputIcon({
  value,
  functionOnChange,
  functionOnClick,
}) {
  return (
    <Container>
      <IconLocalization />
      <TextInput>Onde:</TextInput>
      <Input
        placeholder=""
        value={value}
        onChange={text => {
          functionOnChange(text.target.value);
        }}
      />
      <IconClose
        onClick={() => {
          functionOnClick();
        }}
      />
    </Container>
  );
}
InputIcon.propTypes = {
  value: PropTypes.string,
  functionOnChange: PropTypes.func,
  functionOnClick: PropTypes.func,
};
InputIcon.defaultProps = {
  value: '',
  functionOnChange: () => {},
  functionOnClick: () => {},
};
