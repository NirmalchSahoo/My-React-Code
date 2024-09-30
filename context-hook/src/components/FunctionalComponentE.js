import React from 'react';
import { useContext } from 'react';
import FunctionalComponentF from './FunctionalComponentF';
import { UserContext, ChannelContext } from '../App';

const FunctionalComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user}- {channel}
    </div>
  );
};

export default FunctionalComponentE;
