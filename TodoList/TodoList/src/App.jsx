import { GlobalProveider } from './context/GlobalContext';
import { useState } from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home/Home';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <GlobalProveider>
      <ThemeProvider theme={theme}>
         <GlobalStyles /> 
         <Home toggleTheme={toggleTheme} theme={theme}/>
         <Toaster />
      </ThemeProvider>
    </GlobalProveider>
  );
}

export default App;
