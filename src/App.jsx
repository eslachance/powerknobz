import { Outlet, Route, Routes } from '@solidjs/router';

import { Footer } from './Footer';
import { Header } from './Header';

const Home = () => {
  return <>Home</>;
};

const Long = () => {
  const array = Array.from({ length: 5 }, (v, i) => i);
  return (
    <>
      <For each={array}>
        {(number) => (
          <div class="bg-gray rounded-xl max-w-full h-sm m-5 flex items-center justify-center">
            {number}
          </div>
        )}
      </For>
    </>
  );
};

const Base = () => {
  return (
    <div class="bg-slate font-sans text-center min-h-screen flex flex-col font-poppins">
      <Header />
      <div class="text-center max-w-[1170px] m-auto m-t-10 p-t-[75px]">
        <div class="max-w-[1500px] mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <Routes>
      <Route path="" component={Base}>
        <Route path="/" component={Home} />
        <Route path="/long" component={Long} />
      </Route>
    </Routes>
  );
}

export default App;
