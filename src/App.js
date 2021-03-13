import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './components/Layout'


const theme = createMuiTheme({
  palette: {
    primary: {main:'rgba(163, 132, 153, 50)'},
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <Layout/>
      </div>
    </ThemeProvider>

  );
}

export default App;
