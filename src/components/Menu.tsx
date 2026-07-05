import * as React from "react";
import type { PropsWithChildren } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

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
        className="inline-flex size-11 items-center justify-center rounded-md border border-stone-300 text-stone-800 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:border-stone-700 dark:text-stone-200 dark:hover:border-accent-dark dark:hover:text-accent-dark dark:focus-visible:outline-accent-dark"
      >
        <MenuIcon aria-hidden="true" size={22} strokeWidth={2.25} />
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
          className="relative mt-8 w-10/12 rounded-md border border-stone-300 bg-stone-50 text-stone-700 backdrop:bg-black backdrop:opacity-20 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200 dark:backdrop:opacity-50"
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
              className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-md text-stone-700 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-stone-200 dark:hover:text-accent-dark dark:focus-visible:outline-accent-dark"
            >
              <X aria-hidden="true" size={20} strokeWidth={2.25} />
            </button>
            {props.children}
          </div>
        </dialog>
      }
    </div>
  );
};

export default Menu;
