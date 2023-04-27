/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import 'uno.css';
import './index.css';
import App from './App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
);
