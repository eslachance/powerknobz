import { A } from '@solidjs/router';
import logo from '@/PowerKnobsNameWhite.svg';

export const Footer = () => {
  return (
    <div class="w-full bg-purple/25 m-0 mt-auto flex lg:items-center text-white">
      <div class="w-[1170px] mx-auto px-12 pt-4 lg:pt-0 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div class="leading-none">
          <a href="/" target="_blank">
            <img
              class="leading-none w-25 select-none fill-white"
              alt="logo"
              src={logo}
            ></img>
          </a>
        </div>
        <div class="m-0 text-xs mt-3 lg:mt-0 text-left">
          © PowerKnobz LLC 2023. All rights reserved.
        </div>
        <div>
          <ul class="flex gap-2 list-none m-0 p-0">
            <li class="text-base">
              <p>
                <A
                  href="#"
                  class="font-normal text-sm underline text-white"
                  role="button"
                  tabindex="0"
                >
                  <span>Privacy</span>
                </A>
              </p>
            </li>
            <li class="text-base">
              <p>
                <A
                  href="#"
                  class="font-normal text-sm underline text-white"
                  role="button"
                  tabindex="0"
                >
                  <span>Contact us</span>
                </A>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
