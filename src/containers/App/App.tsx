import React, { useEffect } from 'react';
import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
// css style configs
import theme from 'styles/theme';
import 'styles/fonts.css'; // import config font define
import 'sweetalert2/dist/sweetalert2.min.css';
// diff import
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import { selectAppStore } from './store/selecters';
import LanguageProvider from './LanguageProvider';
import Login from 'containers/Login';
import Home from 'containers/Home';
import 'antd/dist/antd.css';
import Order from 'containers/Order';
import Product from 'containers/Product';
import Supplier from 'containers/Supplier';

function App() {
  const { loading } = useSelector(selectAppStore);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/product">
              <Product />
            </Route>

            <Route exact path="/order">
              <Order />
            </Route>

            <Route exact path="/supplier">
              <Supplier />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
        {/* // extra config global */}
        <Loading active={loading} />
        <GlobalStyle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
