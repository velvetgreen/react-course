import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ProfilePage from 'pages/Profile';
import HomePage from 'pages/Home';
import ChatsPage from 'pages/Chats';
import configureStore from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {main:'rgba(163, 132, 153, 50)'},
  },
});

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className='wrapper'>
            <Switch>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route exact path="/chats">
                <ChatsPage />
              </Route>
              <Route path="/chats/:chatId">
                <ChatsPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
