import { ThemeProvider } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Profile from './components/Profile';
import Footer from './components/Footer';
import NavBar from './components/NavBar'

import React from 'react'
import Resume from './pages/Resume';
import Skills from './pages/Skills';


const App = () => {
  const theme = useSelector(state => state.theme)
  return (
    <ThemeProvider theme={theme.theme}>
      <Paper>
        <Container maxWidth='md' style={{ padding: 0 }} >
          <Grid justify="center" container spacing={2} direction="row">
            
            <Grid item xs>
              <BrowserRouter>
                <NavBar></NavBar>
                <Switch>
                  <Route exact from='/skills' render={props => <Skills{...props} />}></Route>
                  <Route exact from='/' render={props => <Resume{...props} />}></Route>
                </Switch>
              </BrowserRouter>
              <br />

            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <Profile></Profile>
            </Grid>
          </Grid>
              <Footer></Footer>
        </Container>
      </Paper>

    </ThemeProvider>
  );
}

export default App
