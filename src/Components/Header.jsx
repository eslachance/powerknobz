import { A } from '@solidjs/router';
import logo from '@/PowerKnobsNameWhite.svg';

export const Header = () => {
  return (
    <div class="fixed top-0 w-full flex justify-center text-white h-[75px] pl-[50px] bg-purple font-sans">
      <div class="w-[1280px] max-w-[1280px] flex items-center h-full">
        <A href="/">
          <img class="h-[75px] w-50 mr-5" src={logo} alt="PowerKnobs" />
        </A>
        <A href="/" class="mx-2 font-sans no-underline">
          Home
        </A>
        <A href="/products" class="mx-2 font-sans no-underline">
          Products
        </A>
      </div>
    </div>
  );
};
