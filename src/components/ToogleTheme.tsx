import { ToogleThemeFnType } from '@/types';
import Image from 'next/image';

const ToogleTheme: ToogleThemeFnType = (theme, setTheme) => {

  function handleClick() {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  return <Image id='toogle-theme'
    width={36}
    height={36}
    src={`/theme-icons/${theme === 'light-theme' ? 'moon-solid.svg'
      : theme === 'dark-theme' ? 'sun-solid.svg'
      : 'eye-regular.svg'
    }`}
    alt={theme === 'light-theme' ? 'Moon Icon'
      : theme === 'dark-theme' ? 'Sun Icon'
      : 'Eye Icon'
    }
    onClick={handleClick}
  />
}

export default ToogleTheme;
