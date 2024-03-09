import React from 'react';

const AdvertisementModal = () => {
  return (
    <div id="advertisementModal" className="modal fade" style={{ zIndex: 999999 }}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div
            className="modal-header justify-content-center"
            style={{ backgroundColor: 'aqua', height: '100px' }}
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
                <label htmlFor="adImage" className="col-form-label">
                  Image:
                </label>
                <input type="file" className="form-control" id="adImage" />
              </div>
              <div className="form-group">
                <label htmlFor="adLink" className="col-form-label"></label>
                <input type="url" className="form-control" id="adLink" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <h4 id="adModalMsg"></h4>
            <button type="button" className="btn btn-primary" id="adSubmit">
              Submit
            </button>
            Note: Payment of Rs.5000 in ether will be charged
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementModal;
