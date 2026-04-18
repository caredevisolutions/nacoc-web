import React, { createContext, useContext } from 'react';

// DataContext is intentionally minimal. All page content is fetched directly
// from the WordPress REST API (see src/services/api.js). This provider is
// retained for backward compatibility with components that still import it,
// and as a place to hang any future client-side global UI state.

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};
