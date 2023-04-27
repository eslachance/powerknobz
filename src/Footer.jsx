export const Footer = () => {
  return (
    <div class="w-full bg-lightpurple m-0 mt-auto flex lg:items-center">
      <div class="w-[1170px] mx-auto px-12 pt-4 lg:pt-0 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div class="leading-none">
          <a href="https://example.com" target="_blank">
            <img
              class="leading-none w-[70px] select-none"
              alt="logo"
              src="https://via.placeholder.com/70x40.png"
            ></img>
          </a>
        </div>
        <div class="m-0 text-xs mt-3 lg:mt-0 text-left">
          © PowerKnobs LLC 2023. All rights reserved.
        </div>
        <div>
          <ul class="flex gap-2 list-none m-0 p-0">
            <li class="text-base">
              <p>
                <a
                  class="font-normal text-sm underline"
                  role="button"
                  tabindex="0"
                >
                  <span>Privacy</span>
                </a>
              </p>
            </li>
            <li class="text-base">
              <p>
                <a
                  class="font-normal text-sm underline"
                  role="button"
                  tabindex="0"
                >
                  <span>Contact us</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
