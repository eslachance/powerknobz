import { A } from '@solidjs/router';
import logo from '@/PowerKnobsNameWhite.svg';
import PKLogo from '@/PK-Circle.png';

/*
<A href="/">
          <img class="h-[75px] w-50 mr-5" src={logo} alt="PowerKnobs" />
        </A>
        <A href="/" class="mx-2 font-sans no-underline">
          Home
        </A>
        <A href="/products" class="mx-2 font-sans no-underline">
          Products
        </A>
*/

export const Header = () => {
  return (
    <div class="fixed top-0 w-full flex justify-center h-75px font-sans">
      <div class="absolute top-0 left-0 w-full flex justify-center text-white h-[75px] bg-purple z-[100]">
        <div class="w-[1280px] max-w-[1280px] flex justify-center h-full">
          <div class="w-128px h-128px rounded-full bg-black p-0 m-0">
            <img src={PKLogo} class="w-full h-full" />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center h-[75px] shadow-xl shadow-cyan-500/50">
        <div class="w-128px h-128px border-1 border-solid rounded-full shadow-md shadow-cyan-500/50 animate-pulse"></div>
      </div>
    </div>
  );
};
