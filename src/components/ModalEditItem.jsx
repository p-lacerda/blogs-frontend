/* eslint-disable react/prop-types */
import React from 'react';

function ModalEditItem({
  show, onClose, onChange, editItem,
}) {
  return (
    !show ? null
      : (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Edit item</h4>
            </div>
            <div className="modal-body">
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  placeholder="Hello world"
                  name="title"
                  onChange={(e) => onChange(e)}
                />
              </label>
              <label htmlFor="content">
                Content
                <input
                  type="text"
                  placeholder="Content here"
                  name="content"
                  onChange={(e) => onChange(e)}
                />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="button-secondary"
                onClick={() => onClose()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="button-primary"
                onClick={(e) => editItem(e)}
              >
                Save
              </button>
            </div>
          </div>

        </div>
      )
  );
}

export default ModalEditItem;
