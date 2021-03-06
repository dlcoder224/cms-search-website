import { Fragment } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './router';
import { Provider } from 'react-redux'
import store from './store/store';

function App() {

  const GetRoutes = (() => useRoutes(routes))
  const SetRoutes = (() => <BrowserRouter><GetRoutes /></BrowserRouter>)

  return (
    <Provider store={store}>
      <Fragment>
        <SetRoutes />
      </Fragment>
    </Provider>
  );
}

export default App;
