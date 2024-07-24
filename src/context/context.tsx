import React, { useContext, createContext, useState } from 'react';

import { LayoutType } from 'utils/types';
import { ITypes } from 'components/SelectBox';

interface IAppContextProvider {
    children:React.ReactNode;
}

type IAppContext = {
selectedLayout?:LayoutType;
setSelectedLayout:React.Dispatch<React.SetStateAction<LayoutType | undefined>>;
selectedTemplate?:ITypes;
setSelectedTemplate:React.Dispatch<React.SetStateAction<ITypes | undefined>>;
};

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider:React.FC<IAppContextProvider> = ({ children }) => {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType|undefined>(undefined);
  const [selectedTemplate, setSelectedTemplate] = useState<ITypes>();

  const contextValue = React.useMemo(() => ({
    selectedLayout,
    setSelectedLayout,
    selectedTemplate,
    setSelectedTemplate,
  }), [selectedLayout, selectedTemplate]);

  return (
    <AppContext.Provider
      value={contextValue}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }

  return context;
};
