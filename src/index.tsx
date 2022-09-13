import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './store/store';
import { GlobalStyles } from './ui/GlobalStyles';
import { resetCSS } from './ui/reset';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <Provider store={store} ><App /></Provider>
  </BrowserRouter>
);


