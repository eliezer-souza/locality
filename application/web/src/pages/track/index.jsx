import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ActionsWrapper, Image, Content } from './style';
import { GenericTemplate } from '../../templates';
import LogoPin from '../../assets/logo-locality-pin.svg';
import { Button, Field, Label, Title, Space } from '../../components';

const Track = ({ history: { push } }) => {
  const [trackingCode, setTrackingCode] = useState();

  const handleSubmit = () => {};

  return (
    <GenericTemplate>
      <Content>
        <Image src={LogoPin} />
        <Space size="20px" />
        <div>
          <Title size="100px" className="title">
            Bem-vindo à
          </Title>
          <Space type="vertical" size="10px" />
          <Title size="100px" className="title" primary>
            locality
          </Title>
        </div>
        <Space size="20px" />
        <Label size="22px" className="label">
          Digite o código de rastreamento da sua encomenda
        </Label>
        <Space size="20px" />
        <ActionsWrapper>
          <Field
            block
            placeholder="Código de rastramento"
            size="large"
            onChange={e => setTrackingCode(e.target.value)}
          />
          <Space size="10px" />
          <Button
            block
            size="large"
            onClick={() => push(`/track/${trackingCode}`)}
          >
            Entrar
          </Button>
        </ActionsWrapper>
      </Content>
    </GenericTemplate>
  );
};

Track.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Track);
