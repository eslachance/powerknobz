import Dismiss from 'solid-dismiss';
import { createSignal } from 'solid-js';

export const useModal = () => {
  const [open, setOpen] = createSignal(false);
  const [buttonRef, setButtonRef] = createSignal(null);

  const onClickClose = () => {
    setOpen(false);
  };

  const onClickOverlay = (e) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  const DismissableModal = (props) => (
    <>
      <Dismiss
        menuButton={buttonRef}
        open={open}
        setOpen={setOpen}
        modal
        animation={{
          name: 'fade-modal',
          appendToElement: '.modal-container',
        }}
      >
        <div
          class="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-100 bg-black/75"
          onClick={onClickOverlay}
          role="presentation"
        >
          <div
            class="relative max-h-full w-[80vw] max-w-[800px] p-3 px-10 rounded-lg bg-white overflow-auto"
            role="dialog"
            aria-modal="true"
            tabindex="-1"
          >
            {props.children}
            <button
              class="absolute top-1 right-1 bg-white text-black border-none cursor-pointer h-[32px] w-[32px]"
              aria-label="close modal"
              onClick={onClickClose}
            >
              <span class="w-full h-full i-material-symbols-close" />
            </button>
          </div>
        </div>
      </Dismiss>
    </>
  );

  return [DismissableModal, setOpen, setButtonRef];
};
