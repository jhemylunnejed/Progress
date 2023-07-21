"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClickTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <>
      <div className="ml-4 flex items-center justify-center w-fit h-fit z-50">
        <input
          onClick={() => onClickTheme()}
          className="hidden"
          type="checkbox"
          checked={theme === 'dark'}
          id="toggle_1"
          value="1"
        />
        <label
          className="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer"
          htmlFor="toggle_1" 
        >
          <span className="w-4 h-4 bg-black rounded-full"></span>
        </label>
        <span className="w-8"></span>
      </div>
    </>
  );
};

export default ThemeSwitcher;
