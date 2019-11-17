import React, { FC } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import store from '../../assets/store.png';

const OnlineStore: FC<RouteComponentProps> = () => {
  const onImageClick = () => {
    navigate('spend');
  };
  return <img src={store} onClick={onImageClick} />;
};

export default OnlineStore;
