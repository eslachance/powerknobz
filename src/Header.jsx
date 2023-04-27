import { A } from '@solidjs/router';
import logo from './NameOnlyBlack.svg';

export const Header = () => {
  return (
    <div class="fixed top-0 w-full flex items-center text-white h-[75px] pl-[50px] bg-purple font-sans">
      <a href="/" class="leading-[0]">
        <img class="w-50 mr-5" src={logo} alt="PowerKnobs" />
      </a>
      <A href="/" class="mx-2 font-sans">
        Home
      </A>
      <A href="/long" class="mx-2">
        long page
      </A>
    </div>
  );
};
