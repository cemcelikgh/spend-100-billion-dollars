import { Theme } from '@/types/types';
import Routine from './Routine';

const ThemeToggle = ({
  theme,
  setTheme,
}: {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
}) => {

  function handleToggleTheme() {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('light'); 
    else {
      const isLightTheme = window
        .matchMedia('(prefers-color-scheme: light)').matches;
      if (isLightTheme) setTheme('dark');
      else setTheme('light');
    };
  };

  return (
    <button
      id='theme-toggle'
      onClick={handleToggleTheme}
    >
      <Routine />
    </button>
  );

}

export default ThemeToggle;
