import { Outlet } from '@solidjs/router';

import { Footer } from '@/Components/Footer';
import { Header } from '@/Components/Header';

export const Template = () => {
  return (
    <div class="bg-slate font-sans text-center min-h-screen flex flex-col font-poppins">
      <Header />
      <div class="text-center max-w-[1170px] m-auto m-t-10 p-t-[75px] text-white">
        <div class="mx-auto w-full h-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
