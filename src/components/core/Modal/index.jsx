import React from "react";

const CModal = ({ children, refModal }) => {
  return (
    <dialog id="my_modal_2" className="modal" ref={refModal}>
      <div className="modal-box bg-neutral rounded-2xl">
        <div>{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CModal;
