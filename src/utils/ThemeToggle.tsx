import Image from 'next/image';

const ThemeToggle = ({
  theme, setTheme,
}: {
  theme: string; setTheme: (theme: string) => void;
}) => {

  function handleClick() {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    };
  };

  return (
    <div id='theme-toggle' onClick={handleClick}>
      <Image
        width={36}
        height={36}
        src={`images/theme-icons/${theme === 'light-theme' ? 'moon-solid.svg'
          : theme === 'dark-theme' ? 'sun-solid.svg'
          : 'eye-regular.svg'
        }`}
        alt={theme === 'light-theme' ? 'Moon Icon'
          : theme === 'dark-theme' ? 'Sun Icon'
          : 'Eye Icon'
        }
      />
    </div>
  );

}

export default ThemeToggle;
