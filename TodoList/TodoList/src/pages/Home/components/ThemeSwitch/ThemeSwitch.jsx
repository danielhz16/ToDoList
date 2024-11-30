import Moon from './components/Moon';
import Sun from './components/Sun'; 
import { Container } from './styledComponents/Container';

const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      {theme.name === 'light' ? <Sun /> : <Moon />} 
    </Container>
  );
};

export default ThemeSwitch;
