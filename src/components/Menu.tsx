import * as React from "react";
import type { PropsWithChildren } from "react";

const Menu = (props: PropsWithChildren) => {
  const dialogRef = React.useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          const dialog = dialogRef.current as unknown as HTMLDialogElement;
          dialog.showModal();
        }}
        title="Open navigation menu"
        aria-label="Open navigation menu"
        className="size-8 mx-4 rounded-md text-3xl "
      >
        ☰
      </button>
      {
        <dialog
          ref={dialogRef}
          onClick={(e) => {
            const dialog = dialogRef.current as unknown as HTMLDialogElement;
            const wrapper = dialog.firstChild;
            if (
              wrapper !== null &&
              !wrapper.contains(e.target as HTMLElement)
            ) {
              dialog.close();
            }
          }}
          className="relative w-10/12 text-stone-700 mt-8 rounded-md dark:text-stone-200 bg-stone-200 dark:bg-stone-950  backdrop:bg-black backdrop:opacity-20 dark:backdrop:opacity-50"
        >
          <div className="px-8 py-12">
            <button
              onClick={() => {
                const dialog =
                  dialogRef.current as unknown as HTMLDialogElement;
                dialog.close();
              }}
              title="Close menu"
              aria-label="Close menu"
              className="absolute top-2 right-2 flex items-center justify-center size-8 rounded-md"
            >
              ✕
            </button>
            {props.children}
          </div>
        </dialog>
      }
    </div>
  );
};

export default Menu;
