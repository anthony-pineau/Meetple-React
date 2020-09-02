// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import persistStore from 'redux-phoenix';

// Composants
import App from 'src/containers/App';
import store from 'src/store';

persistStore(store).then(store => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, document.getElementById('root'),
  );
});
