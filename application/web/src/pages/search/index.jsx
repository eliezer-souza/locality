import React from 'react';

import { Image, Content } from './style';
import SearchForm from './form';

import { Label, Title, Space } from '../../components';
import { GenericTemplate } from '../../templates';
import LogoPin from '../../assets/logo-locality-pin.svg';

const Search = React.memo(() => (
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
      <SearchForm />
    </Content>
  </GenericTemplate>
));

export default Search;
