import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import { Container } from './styles';

export default function SelectInput({ value, functionOnChange, options }) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: 40,
      minHeight: 40,
      fontSize: 14,
      border: 0,
      fontWeight: 'bold',
      color: colors.black,
      placeholderColor: colors.black,
      // This line disable the blue border
      boxShadow: 'none',
      backgroundColor: 'transparent',
      minWidth: state.selectProps.width,
    }),
  };
  return (
    <Container>
      <Select
        styles={customStyles}
        value={value}
        placeholder=""
        onChange={text => functionOnChange(text)}
        options={options}
      />
    </Container>
  );
}
SelectInput.propTypes = {
  value: PropTypes.objectOf(PropTypes.any),
  functionOnChange: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.any),
};
SelectInput.defaultProps = {
  value: {
    value: 100,
    label: '100 km',
  },
  functionOnChange: () => {},
  options: [
    { value: 100, label: '100 km' },
    { value: 200, label: '200 km' },
    { value: 300, label: '300 km' },
  ],
};
