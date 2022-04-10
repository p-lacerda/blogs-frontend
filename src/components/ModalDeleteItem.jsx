/* eslint-disable react/prop-types */
import React from 'react';

function ModalDeleteItem({ show, onClose, deleteItem }) {
  return (
    !show ? null
      : (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              <p>Are you sure you want to delete this item?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="button-secondary" onClick={() => onClose()}>Cancel</button>
              <button type="button" className="button-primary" onClick={() => deleteItem()}>Ok</button>
            </div>
          </div>
        </div>
      )
  );
}

export default ModalDeleteItem;
