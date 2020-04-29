import React from 'react';
import PropTypes from 'prop-types';
import { AreaSvg, Svg, Image, ContainerLogo } from './styles';
import logo from '../../assets/images/logo.png';

export default function Logo({ image }) {
  return (
    <ContainerLogo>
      <AreaSvg>
        {image ? (
          <Svg>
            <Image href={logo} />
          </Svg>
        ) : null}
      </AreaSvg>
    </ContainerLogo>
  );
}
Logo.propTypes = {
  image: PropTypes.bool,
};
Logo.defaultProps = {
  image: true,
};
