import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  const theme = useSelector(state => state.theme)
  return (
    <ThemeProvider theme={theme.theme}>
      <BrowserRouter>
        <Container maxWidth="md">
          <MainPage></MainPage>
        </Container>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
