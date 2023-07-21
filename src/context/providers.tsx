// "use client"

import { MenuContextProvider } from '@/context/MenuContext';
import { ThemeProvider } from 'next-themes';

import React, { useEffect, useState, ReactNode, FC } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute='class'>
      <MenuContextProvider>
        {children}
      </MenuContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
