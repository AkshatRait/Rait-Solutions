import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const contactContext = createContext();


const MainProvider = (props) => {

  return (
    <contactContext.Provider value>
      {props.children}
      
    </contactContext.Provider>
  );
};

export default MainProvider;
