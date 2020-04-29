import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonOfert, ButtonClean, Button } from './styles';

export default function Footer({ functionCleanState }) {
  return (
    <Container>
      <ButtonOfert type="button"> > Busca Avançada </ButtonOfert>
      <div>
        <ButtonClean
          type="button"
          onClick={() => {
            functionCleanState();
          }}
        >
          Limpar filtros
        </ButtonClean>
        <Button type="button">VER OFERTAS</Button>
      </div>
    </Container>
  );
}
Footer.propTypes = {
  functionCleanState: PropTypes.func,
};
Footer.defaultProps = {
  functionCleanState: () => {},
};
