import React from 'react';
import { PlatformTemplate } from '../../templates';
import { Sidebar } from '../../components';
import { Image } from './style';

import LogoPinWhite from '../../assets/logo-locality-pin-white.svg';

const Track = () => {
  return (
    <PlatformTemplate>
      <Sidebar
        startComponent={<Image src={LogoPinWhite} />}
        halfComponent={[<span>2</span>, <span>3</span>]}
        endComponent={<span>4</span>}
      />
      <h1>track</h1>
    </PlatformTemplate>
  );
};

export default Track;
