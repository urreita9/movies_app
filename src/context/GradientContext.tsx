import React from 'react';
import {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setImageColors: (myColors: ImageColors) => void;
  setPrevImageColors: (myColors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setImageColors = (myColors: ImageColors) => {
    setColors(myColors);
  };
  const setPrevImageColors = (myColors: ImageColors) => {
    setPrevColors(myColors);
  };
  return (
    <GradientContext.Provider
      value={{colors, prevColors, setImageColors, setPrevImageColors}}>
      {children}
    </GradientContext.Provider>
  );
};
