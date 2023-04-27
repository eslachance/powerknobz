import { Route, Routes } from '@solidjs/router';

import { Home } from './Pages/Home';
import { Products } from './Pages/Products';

import { Template } from './Layout/Template';

export function App() {
  return (
    <Routes>
      <Route path="" component={Template}>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Route>
    </Routes>
  );
}

export default App;
