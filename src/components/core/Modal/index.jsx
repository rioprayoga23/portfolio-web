import React from "react";

const CModal = ({ children }) => {
  return (
    <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
      <div className="relative modal-box bg-neutral rounded-t-2xl sm:rounded-2xl">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-400 text-black">
            ✕
          </button>
        </form>
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default CModal;
