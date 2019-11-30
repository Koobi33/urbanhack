import { createContext, useContext } from 'react';

export const MoneyContext = createContext(null);

export function useMoney() {
  return useContext(MoneyContext);
}
