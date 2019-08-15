import React from 'react';
import { Link } from 'react-router-dom';

import { Content, Header, Image } from './style';

import { Button, Label, Title, Space } from '../../components';
import { GenericTemplate } from '../../templates';
import Logo from '../../assets/logo-locality.svg';

const Home = React.memo(() => (
  <GenericTemplate>
    <Header>
      <Image src={Logo} alt="Logo da locality" />
    </Header>
    <Content>
      <Title size="100px" className="title">
        A forma mais fácil de saber onde sua encomenda está ;)
      </Title>
      <Space size="20px" />
      <Label size="22px" className="label">
        Gerenciador de rastreamento online, fácil de se usar e tem tudo que seu
        cliente precisa saber sobre o rastreamento de sua encomenda.
      </Label>
      <Space size="20px" />
      <Link to="/search" className="link">
        <Button size="large">Começar</Button>
      </Link>
    </Content>
  </GenericTemplate>
));

export default Home;
