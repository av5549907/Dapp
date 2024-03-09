import React from 'react';

const DweetModal = () => {
  return (
    <div id="dweetModal" className="modal fade" style={{ zIndex: 999999 }}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div
            className="modal-header justify-content-center"
            style={{ backgroundColor: '#eda645', height: '100px' }}
          >
            <div className="icon-box">
              <i className="material-icons">create</i>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div className="modal-body text-center">
            <form>
              <div className="form-group">
                <label htmlFor="dweetTag" className="col-form-label">
                  Tag:
                </label>
                <input type="text" className="form-control" id="dweetTag" />
                <label htmlFor="dweetImage" className="col-form-label">
                  Image:
                </label>
                <input type="file" className="form-control" id="dweetImage" />
              </div>
              <div className="form-group">
                <label htmlFor="dweetContent" className="col-form-label"></label>
                <textarea
                  className="form-control"
                  id="dweetContent"
                  style={{ height: '200px' }}
                ></textarea>
              </div>
            </form>
          </div>
          <h3 id="dweetModalMsg" style={{ alignSelf: 'center', color: '#e85e6c' }}></h3>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" id="dweetSubmit">
              Dweet
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DweetModal;
